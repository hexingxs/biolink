const text = "Hex!";
const typingSpeed = 120;
const deletingSpeed = 80;
const pauseAfterTyping = 8000;
const pauseAfterDeleting = 1000;

const typewriter = document.getElementById("typewriter");

let index = 0;
let deleting = false;

function typeEffect() {
    if (!deleting) {
        // Typing
        typewriter.textContent = text.substring(0, index + 1);
        index++;

        if (index === text.length) {
            deleting = true;
            setTimeout(typeEffect, pauseAfterTyping);
        } else {
            setTimeout(typeEffect, typingSpeed);
        }
    } else {
        // Deleting
        typewriter.textContent = text.substring(0, index - 1);
        index--;

        if (index === 0) {
            deleting = false;
            setTimeout(typeEffect, pauseAfterDeleting);
        } else {
            setTimeout(typeEffect, deletingSpeed);
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});