function updateClock() {
    const now = new Date();
    let hour = now.getHours();
    const meridiem = now.getHours >= 12 ? "AM" : "PM";
    hour = hour % 12 || 12;
    hour = hour.toString().padStart(2, 0);
    const minutes = now.getMinutes().toString().padStart(2, 0);
    const second = now.getSeconds().toString().padStart(2, 0);
    const timeString = `${hour}:${minutes}:${second}:${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);