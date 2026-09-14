# Nurtur Reader walkthrough animation

Standalone HTML/CSS/JS source for the product walkthrough animation.

Preview locally:

```bash
npm run dev
```

Then open `http://localhost:5173/animation/`.

Export MP4 and GIF locally:

```bash
node scripts/export-reader-animation.mjs
```

The export script uses the installed macOS Google Chrome app and `ffmpeg`. It writes generated files to `public/animation/exports/`.
