import { mkdir, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { spawn } from "node:child_process";
import { join, resolve } from "node:path";
import { once } from "node:events";

const root = resolve(new URL("..", import.meta.url).pathname);
const animationDir = join(root, "public", "animation");
const framesDir = join(animationDir, "exports", "frames");
const outputMp4 = join(animationDir, "exports", "nurtur-reader-walkthrough.mp4");
const outputGif = join(animationDir, "exports", "nurtur-reader-walkthrough.gif");
const chromePath = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const port = 4179;
const cdpPort = 9227;
const totalMs = 20500;
const frameRate = 30;
const width = 1280;
const height = 720;

function run(command, args, options = {}) {
  return new Promise((resolveRun, reject) => {
    const child = spawn(command, args, { stdio: "inherit", ...options });
    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolveRun();
      } else {
        reject(new Error(`${command} exited with code ${code}`));
      }
    });
  });
}

function contentType(pathname) {
  if (pathname.endsWith(".css")) return "text/css";
  if (pathname.endsWith(".js")) return "text/javascript";
  if (pathname.endsWith(".png")) return "image/png";
  if (pathname.endsWith(".svg")) return "image/svg+xml";
  return "text/html";
}

async function serveStatic() {
  const { readFile } = await import("node:fs/promises");
  const server = createServer(async (request, response) => {
    try {
      const url = new URL(request.url ?? "/", `http://localhost:${port}`);
      let pathname = decodeURIComponent(url.pathname);
      if (pathname === "/animation/") pathname = "/animation/index.html";
      const filePath = join(root, "public", pathname.replace(/^\/+/, ""));
      const body = await readFile(filePath);
      response.writeHead(200, { "Content-Type": contentType(pathname) });
      response.end(body);
    } catch {
      response.writeHead(404);
      response.end("Not found");
    }
  });

  server.listen(port, "127.0.0.1");
  await once(server, "listening");
  return server;
}

async function connectToChrome() {
  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${cdpPort}/json`);
      const targets = await response.json();
      const page = targets.find((target) => target.type === "page");
      if (page?.webSocketDebuggerUrl) {
        return page.webSocketDebuggerUrl;
      }
    } catch {
      await new Promise((resolveDelay) => setTimeout(resolveDelay, 250));
    }
  }

  throw new Error("Chrome DevTools endpoint did not become available.");
}

function createCdpClient(webSocketDebuggerUrl) {
  const socket = new WebSocket(webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolveMessage, rejectMessage } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) {
        rejectMessage(new Error(message.error.message));
      } else {
        resolveMessage(message.result);
      }
    }
  });

  return {
    ready: once(socket, "open"),
    send(method, params = {}) {
      id += 1;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolveMessage, rejectMessage) => {
        pending.set(id, { resolveMessage, rejectMessage });
      });
    },
    close() {
      socket.close();
    },
  };
}

async function captureFrames(client) {
  const frameCount = Math.ceil((totalMs / 1000) * frameRate);
  for (let index = 0; index < frameCount; index += 1) {
    const currentTime = (index / frameRate) * 1000;
    await client.send("Runtime.evaluate", {
      expression: `window.__setNurturAnimationTime(${currentTime})`,
      awaitPromise: false,
    });
    const result = await client.send("Page.captureScreenshot", {
      format: "png",
      clip: { x: 0, y: 0, width, height, scale: 1 },
      captureBeyondViewport: false,
    });
    const filename = join(framesDir, `frame-${String(index + 1).padStart(5, "0")}.png`);
    await writeFile(filename, Buffer.from(result.data, "base64"));
  }
}

async function main() {
  await rm(join(animationDir, "exports"), { recursive: true, force: true });
  await mkdir(framesDir, { recursive: true });

  const server = await serveStatic();
  const chrome = spawn(chromePath, [
    `--remote-debugging-port=${cdpPort}`,
    "--headless=new",
    "--disable-gpu",
    "--hide-scrollbars",
    `--window-size=${width},${height}`,
    `http://127.0.0.1:${port}/animation/`,
  ], { stdio: "ignore" });

  try {
    const webSocketDebuggerUrl = await connectToChrome();
    const client = createCdpClient(webSocketDebuggerUrl);
    await client.ready;
    await client.send("Page.enable");
    await client.send("Runtime.enable");
    await client.send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await client.send("Page.navigate", { url: `http://127.0.0.1:${port}/animation/` });
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 500));
    await captureFrames(client);
    client.close();
  } finally {
    chrome.kill("SIGTERM");
    server.close();
  }

  await run("ffmpeg", [
    "-y",
    "-framerate",
    String(frameRate),
    "-i",
    join(framesDir, "frame-%05d.png"),
    "-c:v",
    "libx264",
    "-pix_fmt",
    "yuv420p",
    "-movflags",
    "+faststart",
    outputMp4,
  ]);

  await run("ffmpeg", [
    "-y",
    "-i",
    outputMp4,
    "-vf",
    "fps=15,scale=960:-1:flags=lanczos",
    outputGif,
  ]);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
