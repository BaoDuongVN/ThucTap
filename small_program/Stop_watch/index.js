const display = document.getElementById("clock");
let timer = null;
let startBtn = 0;
let elapsedTime = 0;
let isRunning = false;

function StartClick() {
    if (!isRunning) {
        startBtn = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}

function StopClick() {
    if (isRunning) {
        clearInterval(timer);
        startBtn = Date.now() - elapsedTime;
        isRunning = false;
    }
}

function ResetClick() {
    clearInterval(timer);
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startBtn;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor(elapsedTime % 1000 / 10);
    hours = hours.toString().padStart(2, 0);
    minutes = minutes.toString().padStart(2, 0);
    seconds = seconds.toString().padStart(2, 0);
    milliseconds = milliseconds.toString().padStart(2, 0);
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}
