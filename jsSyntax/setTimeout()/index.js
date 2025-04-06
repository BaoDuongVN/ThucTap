let timeoutId;
function startTimer() {
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log("STARTED");
}

function clearTimer() {
    clearTimeout(timeoutId);
    console.log("CLEARED");
}