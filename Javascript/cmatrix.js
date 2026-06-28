/* Feel free to use this code for your own website! */

const canvas = document.getElementById("cmatrix");
const ctx = canvas.getContext("2d");

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ@#$%&*";
const fontSize = 14;

let columns;
let drops;

function init() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  columns = Math.floor(canvas.width / fontSize);
  drops = Array(columns).fill(1);
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255, 255, 255, 0.1)"; // purple rain
  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];

    const x = i * fontSize;
    const y = drops[i] * fontSize;

    ctx.fillText(text, x, y);

    if (y > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }

  requestAnimationFrame(draw);
}

window.addEventListener("resize", init);

init();
draw();