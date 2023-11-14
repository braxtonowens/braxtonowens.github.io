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

document.addEventListener("fullscreenchange", function() {
    let timerControl = document.getElementById("timerControl");
    if (!document.fullscreenElement) {
        timerControl.style.display = "block";
    }
});

document.getElementById('timerInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        var duration = parseInt(document.getElementById("timerInput").value);
        if (duration > 0) {
            startTimer(duration);
        } else {
            alert("Please enter a valid time in seconds.");
        }
    }
});

let isTimerRunning = false;
let timerInterval = null; // This will store the interval ID
let timerDisplay = null;

// Function to start and show the countdown timer
function startTimer(duration) {
    if (isTimerRunning) {
        return; // If the timer is already running, do nothing
    }
    isTimerRunning = true;
    let timer = duration, minutes, seconds;

    // Create and display the timer element if it doesn't exist
    if (!timerDisplay) {
        timerDisplay = document.createElement("div");
        timerDisplay.id = "timerDisplay";
        document.body.appendChild(timerDisplay);
    }

    timerInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timerDisplay.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            timerInterval = null;
            isTimerRunning = false;
            timerDisplay.remove(); // Remove the timer display when done
            timerDisplay = null;
            flashScreen(); // Call the function to flash the screen
        }
    }, 1000);
}

function deleteTimer() {
    if (timerInterval) {
        clearInterval(timerInterval); // Stop the timer
        timerInterval = null;
    }

    isTimerRunning = false;

    // Remove the timer display element
    if (timerDisplay) {
        timerDisplay.remove();
        timerDisplay = null; // Reset the reference
    }

    // Optionally, reset or clear the input field
    const timerInput = document.getElementById("timerInput");
    if (timerInput) {
        timerInput.value = "";
    }
}

// Event listener for the delete timer button
document.getElementById('deleteTimer').addEventListener('click', function() {
    deleteTimer();
});

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

