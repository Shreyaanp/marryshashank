// 🎵 Background Music - Now Works on All Devices
const music = document.getElementById('bgMusic');
music.src = "https://firebasestorage.googleapis.com/v0/b/ichiropractic.appspot.com/o/audio.mp3?alt=media&token=532b7b7f-841f-4d55-a25c-7da053946f07";

document.getElementById('musicToggle').addEventListener('click', () => {
    if (music.paused) {
        music.play().catch(() => alert("⚠️ Please click to enable music!"));
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

// 💘 Love Meter - Fully Dynamic
document.getElementById('measureLove').addEventListener('click', () => {
    const nameInput = document.getElementById('nameInput').value.trim();
    if (!nameInput) {
        alert('Please enter your name first! 💝');
        return;
    }

    let compatibility = Math.floor(Math.random() * 31) + 70; // Random 70-100

    const meter = document.querySelector('.meter');
    
    // Reset animation before applying width
    meter.style.transition = "none";
    meter.style.width = "0%";

    setTimeout(() => {
        meter.style.transition = "width 1s";
        meter.style.width = compatibility + '%';
    }, 100);

    let messages = [
        "OMG! You're literally perfect for Shashank! 😍✨",
        "The stars are aligned for you two! 💫",
        "Shashank would totally notice you! 💝",
        "You're definitely Shashank's type! Keep trying! 💖"
    ];

    document.getElementById('result').textContent = `${compatibility}% - ${messages[Math.floor(compatibility / 30)]}`;
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

// 💌 Love Letter Data
const loveLetters = [
    {
        "title": "🌹 To My Dream Boy, Shashank 🌹",
        "message": "Dear Shashank,\n\nFrom the moment I heard your name, my heart knew it had found its melody. Your words, your thoughts, your very presence—it all feels like poetry written just for me. 💕\n\nWith Love, \n [Name]\n[Email]"
    },
    {
        "title": "💌 A Love Note for You, Shashank 💌",
        "message": "Dearest Shashank,\n\nI may not be a poet, but if I were, every verse would be about you. Your smile, your words, your wisdom—everything about you is mesmerizing. If loving you is a story, I never want it to end. 💖\n\nForever Yours, \n [Name]\n[Email]"
    },
    {
        "title": "💖 My Heart Belongs to You 💖",
        "message": "Dear Shashank,\n\nI've tried to fight it, to deny it, but the truth is simple—I’m hopelessly enchanted by you. Your charm, kindness, and passion for knowledge make you the most beautiful story ever written. 💕\n\nLovingly,\n[Name]\n[Email]"
    },
    {
        "title": "✨ My Wish Upon a Star ✨",
        "message": "Hey Shashank,\n\nThey say wishes made on shooting stars come true. If that’s the case, then I must have wished for you long ago, because here you are—perfect, extraordinary, and absolutely breathtaking. 💕\n\nYours Truly,\n[Name]\n[Email]"
    },
    {
        "title": "🌟 The Story of Us 🌟",
        "message": "Dear Shashank,\n\nSome love stories are written in books, but ours is written in the stars. Every moment I see you, I feel like I’m living in the most beautiful novel ever created. If love is art, then you are my masterpiece. 💕\n\nEndlessly Yours,\n[Name]\n[Email]"
    },
    {
        "title": "💓 My Heart Speaks Your Name 💓",
        "message": "Shashank,\n\nEvery heartbeat of mine whispers your name. I don't know how you managed to steal my heart, but I never want it back. I could spend a lifetime getting lost in your words, your laughter, and your incredible mind. 💕\n\nWith Devotion,\n[Name]\n[Email]"
    },
    {
        "title": "🌹 Forever Enchanted by You 🌹",
        "message": "My Dearest Shashank,\n\nYou may think you’re just another guy, but to me, you are a masterpiece. The way you weave words, the way you think, the way you exist—it’s mesmerizing. 💖\n\nForever and Always,\n[Name]\n[Email]"
    },
    {
        "title": "💘 You Are My Inspiration 💘",
        "message": "Dear Shashank,\n\nSome people live to write stories. Others become the story. And you, Shashank, are the most captivating story I’ve ever known. You inspire me, mesmerize me, and most of all, you make me believe in love. 💕\n\nEndlessly Devoted,\n[Name]\n[Email]"
    },
    {
        "title": "💞 The Poetry of My Heart 💞",
        "message": "Shashank,\n\nIf my heart could write poetry, every line would be about you. You are the perfect stanza, the missing piece of my soul’s symphony. With every heartbeat, I fall for you more and more. 💕\n\nWith Love and Light,\n[Name]\n[Email]"
    }
];
// 💖 Preload Images
const imageArray = [];
for (let i = 1; i <= 10; i++) {
    const img = new Image();
    img.src = `assets/a${i}.jpeg`;
    imageArray.push(img);
}

// 💌 Open Love Letter Modal (Now Works Properly)
document.getElementById('generateLetter').addEventListener('click', () => {
    const name = document.querySelector('#fanForm input[type="text"]').value.trim() || "Your Secret Admirer";
    const email = document.querySelector('#fanForm input[type="email"]').value.trim() || "anonymous@love.com";

    // Pick a random love letter
    const randomLetter = loveLetters[Math.floor(Math.random() * loveLetters.length)];

    // Replace placeholders with user data
    const personalizedMessage = randomLetter.message.replace("[Name]", name).replace("[Email]", email);

    // Pick a random preloaded image
    const randomImage = imageArray[Math.floor(Math.random() * imageArray.length)];

    // Update modal content
    document.getElementById('modalTitle').textContent = randomLetter.title;
    document.getElementById('modalMessage').textContent = personalizedMessage;
    document.getElementById('modalImage').src = randomImage.src;

    // Show the modal correctly
    const modal = document.getElementById('loveLetterModal');
    modal.classList.add('show');
    modal.style.display = "flex";
});

// ❌ Close Modal Function (Fixed)
document.querySelector('.close-btn').addEventListener('click', () => {
    const modal = document.getElementById('loveLetterModal');
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
    }, 400);
});

// 💕 Hide modal when clicking outside (Fixed)
window.addEventListener('click', (e) => {
    const modal = document.getElementById('loveLetterModal');
    if (e.target === modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
        }, 400);
    }
});


// 🚨 Enforce Desktop Mode Before Proceeding
function checkDesktopMode() {
    const minWidth = 1024; // Minimum width for desktop mode
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent); // Detect mobile devices
    const desktopModeEnabled = localStorage.getItem("desktopModeEnabled");

    // If user already switched to desktop mode, let them continue
    if (desktopModeEnabled === "true") {
        return;
    }

    // If mobile detected and width too small, show warning
    if (isMobile || window.innerWidth < minWidth) {
        document.body.innerHTML = `
            <div id="desktopWarning" style="display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; text-align: center; background-color: #ff77dd; padding: 20px;">
                <h1 style="color: white; font-size: 2em;">🔍 Switch to Desktop Mode!</h1>
                <p style="color: white; font-size: 1.2em; max-width: 600px;">
                    This website is best viewed on a desktop. <br><br>
                    Please enable <strong>'Desktop Site'</strong> in your browser settings.
                </p>
                <button id="refreshPage" style="margin-top: 20px; padding: 10px 20px; font-size: 1.2em; background-color: white; color: #ff149d; border: none; border-radius: 10px; cursor: pointer;">
                    🔄 I Enabled Desktop Mode
                </button>
            </div>
        `;

        // Prevent zooming and scrolling
        document.documentElement.style.overflow = "hidden";
        document.documentElement.style.touchAction = "none";
        document.documentElement.style.userSelect = "none";

        // Handle Refresh Button Click
        document.getElementById('refreshPage').addEventListener('click', () => {
            localStorage.setItem("desktopModeEnabled", "true"); // Store flag
            location.reload(); // Reload the page after enabling desktop mode
        });
    }
}

// Run check on page load
document.addEventListener('DOMContentLoaded', checkDesktopMode);

// Prevent zooming when clicking inputs (iOS Fix)
document.addEventListener("gesturestart", function (e) {
    e.preventDefault();
});
