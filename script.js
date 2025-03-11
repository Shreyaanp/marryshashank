// 🎵 Background Music - Now Works on All Devices
const music = document.getElementById('bgMusic');
music.src = "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/audio.mp3?alt=media&token=532b7b7f-841f-4d55-a25c-7da053946f07";

document.getElementById('musicToggle').addEventListener('click', () => {
    if (music.paused) {
        music.play();
        document.getElementById('musicToggle').textContent = '🔇';
    } else {
        music.pause();
        document.getElementById('musicToggle').textContent = '🎵';
    }
});

// 🎂 Birthday Countdown - Mobile Friendly
function updateBirthdayCountdown() {
    const now = new Date();
    let birthday = new Date(now.getFullYear(), 2, 12); // March 12

    if (now > birthday) {
        birthday = new Date(now.getFullYear() + 1, 2, 12);
    }

    const diff = birthday - now;
    document.getElementById('bday-days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('bday-hours').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('bday-minutes').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('bday-seconds').textContent = Math.floor((diff % (1000 * 60)) / 1000);
}

setInterval(updateBirthdayCountdown, 1000);
updateBirthdayCountdown();

// 💘 Love Meter - Now Fully Working & Dynamic
document.getElementById('measureLove').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (!nameInput) {
        alert('Please enter your name first! 💝');
        return;
    }

    let compatibility = Math.floor(Math.random() * 31) + 70; // Random between 70-100

    const meter = document.querySelector('.meter');
    meter.style.width = compatibility + '%';

    let messages = [
        "OMG! You're literally perfect for Shashank! 😍✨",
        "The stars are aligned for you two! 💫",
        "Shashank would totally notice you! 💝",
        "You're definitely Shashank's type! Keep trying! 💖"
    ];

    document.getElementById('result').textContent = `${compatibility}% - ${messages[Math.floor(compatibility / 30)]}`;

    // Reset Meter Animation
    meter.style.transition = "none";
    setTimeout(() => {
        meter.style.transition = "width 1s";
    }, 100);
});

// 🔮 Love Horoscope - Now Fully Working & Dynamic
const horoscopeMessages = [
    "Today is perfect for a romantic poetry session! 📖💖",
    "Venus is shining on your love life! Send a sweet message today! ✨",
    "A surprise connection might happen today! Stay open! 💕",
    "Your love energy is high! A perfect day to express your feelings! 💌",
    "Something magical is waiting for you today! Believe in love! 🌟",
    "A little flirtation goes a long way today! 😉💖",
    "Expect a heartwarming surprise from someone special! 🎁",
    "Good vibes are flowing! Love is in the air! 💞",
    "A past connection might resurface today! Keep an open heart! 💭",
    "Let your heart lead the way today! Follow your feelings! ❤️"
];

document.getElementById('getHoroscope').addEventListener('click', () => {
    const birthDate = document.getElementById('birthDate').value;
    if (!birthDate) {
        alert('Please enter your birth date first! 📅');
        return;
    }

    // Generate a daily horoscope based on date
    const dateNum = new Date().getDate();
    document.getElementById('horoscopeResult').textContent = horoscopeMessages[dateNum % horoscopeMessages.length];
});

// 📖 Expanded Love Quiz - Fully Responsive
const quizQuestions = [
    { question: "What is Shashank's favorite hobby?", options: ["Gaming 🎮", "Reading Books 📖"], correctIndex: 1 },
    { question: "What does Shashank prefer?", options: ["Tea ☕", "Coffee ☕"], correctIndex: 0 },
    { question: "How does Shashank spend weekends?", options: ["Netflix & Chill 🎬", "Writing Poetry ✍"], correctIndex: 1 },
    { question: "Shashank's dream vacation?", options: ["Paris 🗼", "Himalayas ⛰"], correctIndex: 1 },
    { question: "Shashank's ideal birthday gift?", options: ["A Classic Novel 📖", "A Fancy Watch ⌚"], correctIndex: 0 },
    { question: "What kind of movies does Shashank enjoy?", options: ["Action 🎬", "Romance 💕"], correctIndex: 1 }
];

let currentQuestion = 0;
let score = 0;

document.getElementById('startQuiz').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('.question-container').classList.remove('hidden');
    showQuestion();
});

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showQuizResult();
        return;
    }
    const question = quizQuestions[currentQuestion];
    document.querySelector('.question-text').textContent = question.question;
    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach((btn, index) => {
        btn.textContent = question.options[index];
        btn.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(index) {
    if (index === quizQuestions[currentQuestion].correctIndex) score++;
    currentQuestion++;
    showQuestion();
}

function showQuizResult() {
    document.getElementById('quizResult').classList.remove('hidden');
    document.getElementById('quizResult').innerHTML = `<p>Your Score: ${score}/${quizQuestions.length}</p>`;
}

// ❤️ Floating Hearts (Disabled on Mobile)
function createHeart() {
    if (window.innerWidth < 768) return;
    const heart = document.createElement('div');
    heart.innerHTML = '❤️';
    heart.style.position = 'fixed';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '-20px';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    heart.style.opacity = Math.random();

    document.querySelector('.floating-hearts').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

// ✨ Disable Cursor Effects on Mobile
if (window.innerWidth >= 768) {
    document.addEventListener('mousemove', (e) => {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerHTML = '✨';
        sparkle.style.left = e.pageX + 'px';
        sparkle.style.top = e.pageY + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    });
}
