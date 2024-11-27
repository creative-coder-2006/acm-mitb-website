// Set the target date for the countdown
const targetDate = new Date("2025-02-08T09:00:00").getTime();

// Update the countdown every second
const countdownInterval = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").innerHTML = "EVENT HAS STARTED";
  }
}, 1000);
