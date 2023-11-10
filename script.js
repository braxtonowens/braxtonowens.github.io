// Function to toggle fullscreen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        document.getElementById("timerControl").style.display = "none";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            document.getElementById("timerControl").style.display = "block";
        }
    }
}

// Add event listener for key press to toggle fullscreen
document.addEventListener("keydown", (e) => {
    if (e.key === "f") { // Press 'f' to toggle fullscreen
        toggleFullScreen();
    }
});

// Function to start timer
function startTimer(duration) {
    setTimeout(function() {
        document.body.style.backgroundColor = "black";
        setTimeout(function() {
            document.body.style.backgroundColor = "white";
            if (document.fullscreenElement) {
                toggleFullScreen();
            }

