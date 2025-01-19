const countdownElement = document.getElementById('timer');
const locationElement = document.getElementById('location');

// Péntek 14:15 és szombat 12:15 dátumok
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
        // Itt már nem az "események véget értek" szöveget jelenítjük meg,
        // hanem a következő eseményről írunk.
        countdownElement.innerHTML = "A találkozóidő elérkezett!";
        locationElement.innerHTML = "";
        clearInterval(interval);
    } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `Még ${days} nap ${hours} óra ${minutes} perc és ${seconds} másodperc van a találkozónkig!`;

        if (currentEvent === 0) {
            locationElement.innerHTML = `<strong style="color: #ff4d4d;">Pénteken 14:15 - Hejobába Iskola</strong><br>Várunk téged, mindössze <span style="color: #ff6666;">${days} nap, ${hours} óra, ${minutes} perc</span> múlva!`;
        } else {
            locationElement.innerHTML = `<strong style="color: #ff4d4d;">Szombaton 12:15 - Nemesbikk</strong><br>Várunk téged, mindössze <span style="color: #ff6666;">${days} nap, ${hours} óra, ${minutes} perc</span> múlva!`;
        }
    }
};

const interval = setInterval(updateCountdown, 1000);
