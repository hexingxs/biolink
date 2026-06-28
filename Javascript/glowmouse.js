/* Feel free to use this code for your own website! */

const isTouchDevice =
  window.matchMedia("(pointer: coarse)").matches ||
  navigator.maxTouchPoints > 0 ||
  "ontouchstart" in window;

if (!isTouchDevice) {
  let glow = document.querySelector(".cursor-glow");

  if (!glow) {
    glow = document.createElement("div");
    glow.className = "cursor-glow";
    document.body.appendChild(glow);
  }

  let x = 0, y = 0;
  let tx = 0, ty = 0;
  let initialized = false;

  window.addEventListener("pointermove", (e) => {
    if (e.pointerType === "touch") return;

    tx = e.clientX;
    ty = e.clientY;

    // set initial position instantly on first move
    if (!initialized) {
      x = tx;
      y = ty;
      initialized = true;

      glow.style.left = x + "px";
      glow.style.top = y + "px";
    }
  });

  function animate() {
    if (initialized) {
      x += (tx - x) * 0.15;
      y += (ty - y) * 0.15;

      glow.style.left = x + "px";
      glow.style.top = y + "px";
    }

    requestAnimationFrame(animate);
  }

  animate();
}