// Function to toggle fullscreen mode
function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}

// Add event listener for key press to toggle fullscreen
document.addEventListener("keydown", (e) => {
    if (e.key === "f") { // Press 'f' to toggle fullscreen
        toggleFullScreen();
    }
});

// Hidden timer - flashes screen after a set time
setTimeout(function() {
    document.body.style.backgroundColor = "black";
    setTimeout(function() {
        document.body.style.backgroundColor = "white";
    }, 500); // Flash duration in milliseconds
}, 5000); // Set timer duration in milliseconds (5000ms = 5 seconds)
