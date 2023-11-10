// Function to toggle fullscreen mode
function toggleFullScreen() {
    let timerControl = document.getElementById("timerControl");

    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
        timerControl.style.display = "none";
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
            timerControl.style.display = "block";
        }
    }
}

// Add event listener for key press to toggle fullscreen
document.addEventListener("keydown", (e) => {
    if (e.key === "f") { // Press 'f' to toggle fullscreen
        toggleFullScreen();
    }
});

// Function to start and show the countdown timer
function startTimer(duration) {
    let timer = duration, minutes, seconds;
    let timerDisplay = document.createElement("div");
    document.body.appendChild(timerDisplay);
    let interval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(interval);
            timerDisplay.parentNode.removeChild(timerDisplay);
            flashScreen();
        }
    }, 1000);
}

// Function to flash the screen
function flashScreen() {
    document.body.style.backgroundColor = "black";
    setTimeout(function() {
        document.body.style.backgroundColor = "white";
        if (document.fullscreenElement) {
            toggleFullScreen();
        }
    }, 500); // Flash duration
}

// Event listener for the timer button
document.getElementById("startTimer").addEventListener("click", function() {
    var duration = parseInt(document.getElementById("timerInput").value);
    if (duration > 0) {
        startTimer(duration);
    } else {
        alert("Please enter a valid time in seconds.");
    }
});

