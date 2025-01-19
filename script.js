const countdownElement = document.getElementById('timer');

// Péntek 14:15 és szombat 12:15
const eventDates = [
    new Date("2025-01-19T14:15:00").getTime(),  // Péntek 14:15
    new Date("2025-01-20T12:15:00").getTime()   // Szombat 12:15
];

let currentEvent = 0;

// Funkció a visszaszámláló frissítéséhez
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = eventDates[currentEvent] - now;

    if (distance < 0 && currentEvent < eventDates.length - 1) {
        // Ha az első esemény megtörtént, a következő eseményre váltunk
        currentEvent++;
    }

    if (distance < 0) {
        countdownElement.innerHTML = "Az események véget értek!";
        clearInterval(interval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countdownElement.innerHTML = days + " nap " + hours + " óra " + minutes + " perc";
    }
};

const interval = setInterval(updateCountdown, 1000);