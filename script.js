const countdownElement = document.getElementById('timer');
const eventDate = new Date("2025-01-20T14:15:00").getTime();  // Péntek 14:15, Hejobába iskola

const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDate - now;

    if (distance < 0) {
        countdownElement.innerHTML = "Az esemény már megtörtént!";
        clearInterval(interval);
    } else {
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.innerHTML = hours + "óra " + minutes + "perc";
    }
};

const interval = setInterval(updateCountdown, 1000);