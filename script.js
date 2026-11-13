const portrait = document.querySelector(".portrait-frame");

if (portrait && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (!reducedMotion.matches) {
    portrait.addEventListener("pointermove", (event) => {
      const bounds = portrait.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      const tiltX = (x - 0.5) * 10;
      const tiltY = (0.5 - y) * 10;

      portrait.style.setProperty("--portrait-pointer-x", `${x * 100}%`);
      portrait.style.setProperty("--portrait-pointer-y", `${y * 100}%`);
      portrait.style.setProperty("--portrait-tilt-x", `${tiltX}deg`);
      portrait.style.setProperty("--portrait-tilt-y", `${tiltY}deg`);
      portrait.classList.add("is-pointer-active");
    });

    portrait.addEventListener("pointerleave", () => {
      portrait.style.removeProperty("--portrait-pointer-x");
      portrait.style.removeProperty("--portrait-pointer-y");
      portrait.style.removeProperty("--portrait-tilt-x");
      portrait.style.removeProperty("--portrait-tilt-y");
      portrait.classList.remove("is-pointer-active");
    });
  }
}
