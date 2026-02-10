const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const askSection = document.getElementById('ask-section');
const successSection = document.getElementById('success-section');
const music = document.getElementById('bg-music');
const musicToggle = document.getElementById('music-toggle');
const typewriterElement = document.getElementById('typewriter');

let noCount = 0;
const phrases = ["No", "Are you sure?", "Really sure??", "Think again!", "Last chance!"];
const messageText = "Vivian, you make every day feel like Valentine's Day. I'm so lucky to have you! ❤️";

function typeWriter(text, i = 0) {
    if (i < text.length) {
        typewriterElement.innerHTML += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 70);
    }
}

musicToggle.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        musicToggle.innerText = "⏸ Pause Music";
    } else {
        music.pause();
        musicToggle.innerText = "🎵 Play Music";
    }
});

const moveButton = () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    noBtn.innerText = phrases[Math.min(noCount, phrases.length - 1)];
    noCount++;
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.15}px`;
};

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => { e.preventDefault(); moveButton(); });

yesBtn.addEventListener('click', () => {
    askSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    if (music.paused) music.play();
    typeWriter(messageText);
    confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } });
});