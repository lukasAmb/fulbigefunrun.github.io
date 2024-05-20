document.addEventListener("DOMContentLoaded", function() {
    // Countdown Timer
    const eventDate = new Date("June 15, 2024 10:00:00").getTime();

    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = eventDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = 
            `${4}d ${12}h ${0}m ${0}s`;

        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById("timer").innerHTML = "The event has started!";
        }
    }, 1000);
});
