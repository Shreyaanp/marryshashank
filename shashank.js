document.addEventListener("DOMContentLoaded", function() {
    updateLoveCounter();
    updateCountdown();
    generateHoroscope();
    loadWishes();
    customMouseEffect();
});

// Love Meter Calculation
function calculateLove() {
    const name = document.getElementById("visitorName").value;
    if (name) {
        let loveScore = Math.floor(Math.random() * 100) + 1;
        document.getElementById("love-result").innerText = `${name} & Shashank: ${loveScore}% ❤️`;
    } else {
        document.getElementById("love-result").innerText = "Enter your name to check!";
    }
}

// Love Counter
function updateLoveCounter() {
    const startDate = new Date("1998-12-03");
    const today = new Date();
    const difference = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
    document.getElementById("love-days").innerText = `${difference} days since Shashank stole your heart!`;
}

// Birthday Countdown
function updateCountdown() {
    const today = new Date();
    const nextBirthday = new Date(today.getFullYear(), 2, 12);
    if (today > nextBirthday) {
        nextBirthday.setFullYear(today.getFullYear() + 1);
    }
    const diff = nextBirthday - today;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerText = `Only ${days} days left until Shashank's next birthday!`;
}

// Fan Club: Send Email
function sendEmail() {
    const email = document.getElementById("email").value;
    if (email) {
        alert(`Your love message has been sent to Shashank from ${email}!`);
    } else {
        alert("Please enter a valid email!");
    }
}

// Generate Love Letter
function generateLoveLetter() {
    const loveMessages = [
        "My love for you grows stronger every day! ❤️",
        "You are the sunshine that lights up my world! ☀️",
        "Every moment with you is a beautiful memory. 💖",
        "You make my heart race like no one else! 💘",
        "I cherish every second spent with you! 🌹"
    ];
    const randomLetter = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    alert(randomLetter);
}

// Generate Horoscope Based on Zodiac Sign
function generateHoroscope() {
    const zodiacSigns = {
        "Pisces": "Your day will be full of love, deep emotions, and meaningful connections!",
        "Aries": "Expect excitement and adventure in your love life today!",
        "Taurus": "A romantic surprise is on its way!",
        "Gemini": "Someone special is thinking about you right now!",
        "Cancer": "Your heart will be filled with joy and comfort today!",
        "Leo": "Love and passion will guide your day!",
        "Virgo": "A deep conversation will bring you closer to someone!",
        "Libra": "Expect balance and harmony in your relationships today!",
        "Scorpio": "A romantic secret will be revealed!",
        "Sagittarius": "An unexpected love adventure awaits you!",
        "Capricorn": "Your dedication will be rewarded with love and appreciation!",
        "Aquarius": "Love may come in a way you never expected!"
    };
    
    const zodiac = "Pisces"; // Based on Shashank's birthday (March 12)
    document.getElementById("horoscope").innerText = zodiacSigns[zodiac];
}

// Load Wishes from JSON
function loadWishes() {
    fetch('wishes.json')
        .then(response => response.json())
        .then(data => {
            const wishesContainer = document.getElementById("wishes-container");
            wishesContainer.innerHTML = "";
            data.wishes.forEach(wish => {
                let wishElement = document.createElement("p");
                wishElement.textContent = `${wish.name}: ${wish.message}`;
                wishesContainer.appendChild(wishElement);
            });
        })
        .catch(error => console.error("Error loading wishes:", error));
}

// Submit a New Wish
function submitWish() {
    alert
    const name = document.getElementById("wishName").value;
    const message = document.getElementById("wishMessage").value;
    if (name && message) {
        fetch('wishes.json')
            .then(response => response.json())
            .then(data => {
                data.wishes.push({ name, message });
                return fetch('wishes.json', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
            })
            .then(() => {
                alert("Wish submitted successfully!");
                loadWishes();
            })
            .catch(error => console.error("Error submitting wish:", error));
    } else {
        alert("Please enter both your name and a wish message!");
    }
}

// Custom Mouse Effect
function customMouseEffect() {
    document.body.addEventListener("mousemove", function(event) {
        const cursor = document.createElement("div");
        cursor.classList.add("cursor-effect");
        cursor.style.left = `${event.clientX}px`;
        cursor.style.top = `${event.clientY}px`;
        document.body.appendChild(cursor);
        setTimeout(() => {
            cursor.remove();
        }, 500);
    });
}
