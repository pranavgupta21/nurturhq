const animationDurationMs = 20000;

window.__nurturAnimationDurationMs = animationDurationMs;
window.__nurturAnimationReady = true;
window.__setNurturAnimationTime = (timeMs) => {
  document.documentElement.classList.add("capture");
  document.documentElement.style.setProperty("--capture-delay", `${-timeMs}ms`);
};
window.__playNurturAnimation = () => {
  document.documentElement.classList.remove("capture");
  document.documentElement.style.removeProperty("--capture-delay");
};

document.addEventListener("keydown", (event) => {
  if (event.key.toLowerCase() !== "r") {
    return;
  }

  const stage = document.querySelector(".stage");
  if (!stage) {
    return;
  }

  stage.style.animation = "none";
  for (const element of stage.querySelectorAll("*")) {
    element.style.animation = "none";
  }

  requestAnimationFrame(() => {
    window.__playNurturAnimation();
    stage.style.animation = "";
    for (const element of stage.querySelectorAll("*")) {
      element.style.animation = "";
    }
  });
});
