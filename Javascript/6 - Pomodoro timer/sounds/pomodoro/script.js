const startingMinutes = 10;
const minutes = startingMinutes;
let time = startingMinutes * 60;
const countdownEl = document.getElementById ('countdown');
setInterval(updateCountdown, 1000);
function updateCountdown ()
    let seconds = time % 60;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;