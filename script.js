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

// 💖 Love Counter - Now Uses a Proper Date Input Field
let loveDate = null;

document.getElementById('setLoveDate').addEventListener('click', () => {
    const dateValue = document.getElementById('loveDateInput').value;
    
    if (!dateValue) {
        alert('Please select a date first! 💕');
        return;
    }

    loveDate = new Date(dateValue);
    localStorage.setItem('loveDate', loveDate.toISOString()); // Save the date
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
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

// 🚀 Load saved love date (if exists)
const savedLoveDate = localStorage.getItem('loveDate');
if (savedLoveDate) {
    loveDate = new Date(savedLoveDate);
    updateLoveCounter();
    setInterval(updateLoveCounter, 1000);
}

const loveLetters = [
    {
        "title": "🌹 To My Forever Love 🌹",
        "message": "Dear Shashank,\n\nEvery moment with you feels like a dream. Your kindness, laughter, and presence make my world brighter. I cherish every second we share. I am grateful to have you in my life. Always yours, 💕\n\nWith Love,\n[Name]\n[Email]"
    },
    {
        "title": "💌 A Letter from the Heart 💌",
        "message": "Dearest Shashank,\n\nThey say love is a journey, and with you, every step feels magical. Your smile is my sunrise, and your voice is my favorite melody. I can't imagine a world without you in it. You make life beautiful. 💖\n\nForever Yours,\n[Name]\n[Email]"
    },
    {
        "title": "💖 My Love for You 💖",
        "message": "Hey Shashank,\n\nThere are a million reasons why I adore you, but the biggest one is that you make my heart race like no one else. You're my reason to smile, my source of strength, and my greatest adventure. 💕\n\nLove Always,\n[Name]\n[Email]"
    },
    {
        "title": "✨ My Dream Come True ✨",
        "message": "Dear Shashank,\n\nI never believed in fairytales until I met you. You are the most beautiful chapter of my life, and I wish to write endless pages with you. My heart beats only for you. 💕\n\nYours Truly,\n[Name]\n[Email]"
    },
    {
        "title": "🌟 Written in the Stars 🌟",
        "message": "Hey Shashank,\n\nSome loves are written in fate, and I believe ours is one of them. Every moment I spend with you feels like a beautiful symphony, and every word you say is poetry to my ears. I am forever enchanted by you. 💕\n\nEndlessly Yours,\n[Name]\n[Email]"
    },
    {
        "title": "💓 A Love Beyond Time 💓",
        "message": "My Dearest Shashank,\n\nIf love had a shape, it would be the shape of your heart, beating in sync with mine. If love had a color, it would be the warmth in your eyes. My heart belongs to you, now and forever. 💕\n\nWith Devotion,\n[Name]\n[Email]"
    },
    {
        "title": "🌹 To the Love of My Life 🌹",
        "message": "My Sweet Shashank,\n\nYou are the most precious treasure in my life. Your love lights up my darkest days, and your laughter fills my world with happiness. Thank you for being my everything. 💖\n\nForever and Always,\n[Name]\n[Email]"
    },
    {
        "title": "💘 My Soulmate 💘",
        "message": "Dearest Shashank,\n\nFrom the moment I met you, I knew my heart had found its home. You are my best friend, my greatest love, and my forever dream. I will cherish you for eternity. 💕\n\nEndlessly Devoted,\n[Name]\n[Email]"
    },
    {
        "title": "💞 You Are My Sunshine 💞",
        "message": "Dear Shashank,\n\nEvery day with you is a blessing. Your love is like sunshine, warming my soul and making everything beautiful. I promise to love and cherish you forever. 💕\n\nWith Love and Light,\n[Name]\n[Email]"
    },
    {
        "title": "💜 Forever in My Heart 💜",
        "message": "Hey Shashank,\n\nYou are my heartbeat, my joy, my everything. Your love is the melody that plays in my soul. I am yours, now and forever. 💕\n\nEternally Yours,\n[Name]\n[Email]"
    }
];

// Function to Generate a Love Letter
document.getElementById('generateLetter').addEventListener('click', () => {
    const userName = document.querySelector("#fanForm input[type='text']").value.trim();
    const userEmail = document.querySelector("#fanForm input[type='email']").value.trim();
    
    if (!userName || !userEmail) {
        alert("Please enter your name and email before generating a love letter! 💌");
        return;
    }

    // Select a Random Love Letter Template
    const randomLetter = loveLetters[Math.floor(Math.random() * loveLetters.length)];

    // Personalize the Letter with Name and Email
    const personalizedMessage = randomLetter.message.replace("[Name]", userName).replace("[Email]", userEmail);

    // Open the Love Letter Modal
    openLoveLetterModal(randomLetter.title, personalizedMessage);
});

// Function to Open the Love Letter Modal
function openLoveLetterModal(title, message) {
    const modal = document.getElementById('loveLetterModal');
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMessage').innerText = message;
    modal.style.display = "flex";
}

// Close Modal Functionality
document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('loveLetterModal').style.display = "none";
});

