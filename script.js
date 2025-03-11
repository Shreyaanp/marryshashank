// 🎵 Background Music - Fixed to use the Firebase link
document.getElementById('bgMusic').src = "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/audio.mp3?alt=media&token=532b7b7f-841f-4d55-a25c-7da053946f07";

document.getElementById('musicToggle').addEventListener('click', () => {
    const music = document.getElementById('bgMusic');
    if (music.paused) {
        music.play();
        document.getElementById('musicToggle').textContent = '🔇';
    } else {
        music.pause();
        document.getElementById('musicToggle').textContent = '🎵';
    }
});

// 🎂 Birthday Countdown Fix
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

// 💘 Love Meter Fix
document.getElementById('measureLove').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (!nameInput) {
        alert('Please enter your name first! 💝');
        return;
    }

    let compatibility = Math.max(70, Math.abs(nameInput.length * 17 % 100));

    document.querySelector('.meter').style.width = compatibility + '%';

    let messages = [
        "OMG! You're literally perfect for Shashank! 😍✨",
        "The stars are aligned for you two! 💫",
        "Shashank would totally notice you! 💝",
        "You're definitely Shashank's type! Keep trying! 💖"
    ];

    document.getElementById('result').textContent = `${compatibility}% - ${messages[Math.floor(compatibility / 30)]}`;
});

// 📖 Expanded Love Quiz
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

// 💖 Love Counter - Improved Input with Date Picker
document.getElementById('setLoveDate').addEventListener('click', () => {
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.style.position = 'fixed';
    dateInput.style.top = '50%';
    dateInput.style.left = '50%';
    dateInput.style.transform = 'translate(-50%, -50%)';
    dateInput.style.padding = '10px';
    dateInput.style.fontSize = '16px';
    dateInput.style.zIndex = '9999';

    document.body.appendChild(dateInput);
    dateInput.focus();

    dateInput.addEventListener('change', () => {
        loveDate = new Date(dateInput.value);
        updateLoveCounter();
        setInterval(updateLoveCounter, 1000);
        document.body.removeChild(dateInput);
    });
});

function updateLoveCounter() {
    if (!loveDate) return;
    const now = new Date();
    const diff = now - loveDate;
    document.getElementById('days').textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('hours').textContent = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    document.getElementById('minutes').textContent = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('seconds').textContent = Math.floor((diff % (1000 * 60)) / 1000);
}

// 💌 Love Letter Generator
document.getElementById('generateLetter').addEventListener('click', () => {
    const loveLetterTemplates = [
        "Dearest Shashank,\n\nYour soul is as deep as the poetry you read, and your heart as rich as the stories you love. 💕\n\nForever yours,\n[Name]",
        "My Literary Love,\n\nLike the most beautiful verse in a poem, your presence makes everything magical. ✨\n\nYours truly,\n[Name]"
    ];
    const name = document.getElementById('nameInput').value.trim() || 'Your Secret Admirer';
    document.getElementById('loveLetter').textContent = loveLetterTemplates[Math.floor(Math.random() * loveLetterTemplates.length)].replace('[Name]', name);
    document.getElementById('loveLetter').classList.remove('hidden');
});

// ❤️ Floating Hearts Effect
function createHeart() {
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

// ✨ Floating Shashank head follows cursor
document.addEventListener('mousemove', (e) => {
    const Shashank = document.getElementById('floating-Shashank');
    Shashank.style.left = e.pageX + 'px';
    Shashank.style.top = e.pageY + 'px';
});

// 🌟 Sparkly Cursor Trail
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
