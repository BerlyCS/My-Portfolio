// script.js
const words = ["developer", "designer", "programmer"];
const typewriterText = document.getElementById("typewriter-text");
const cursor = document.getElementById("typewriter-cursor");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentWord = words[wordIndex];
    const displayedText = currentWord.substring(0, charIndex);
    typewriterText.innerHTML = `I'm a ${displayedText}`;
    
    if (!deleting && charIndex < currentWord.length) {
        charIndex++;
    } else if (deleting && charIndex > 0) {
        charIndex--;
    } else if (!deleting && charIndex === currentWord.length) {
        deleting = true;
        setTimeout(type, 2500); // Pausa antes de borrar
        return;
    } else if (deleting && charIndex === 0) {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    setTimeout(type, deleting ? 60 : 90);
}

document.addEventListener("DOMContentLoaded", () => {
    type();
});
