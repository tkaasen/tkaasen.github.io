var secondsRemaining;
var intervalHandle;

function tick() {
    // grab the h1
    var timeDisplay = document.getElementById("time");

    // turn the seconds into mm:ss
    var min = Math.floor(secondsRemaining / 60);
    var sec = secondsRemaining - (min * 60);

    //add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }

    // concatenate with colon
    var message = min.toString() + ":" + sec;

    // now change the display
    timeDisplay.innerHTML = message;

    // stop is down to zero
    if (secondsRemaining === 0) {
        clearInterval(intervalHandle);
        showButtons();
    }

    //subtract from seconds remaining
    secondsRemaining--;

}

function startCountdown() {
    // get countents of the "minutes" text box
    var minutes = document.getElementById("minutes").value;

    // check if not a number
    if (isNaN(minutes)) {
        alert("Please enter a number");
        return; // stops function if true
    }

    // how many seconds
    secondsRemaining = minutes * 60;

    //every second, call the "tick" function
    // have to make it into a variable so that you can stop the interval later!!!
    intervalHandle = setInterval(tick, 1000);
}




function setTime(timevalue) {
    clearInterval(intervalHandle);

    document.getElementById("minutes").value = timevalue;

    // grab the h1
    var timeDisplay = document.getElementById("time");

    // turn the seconds into mm:ss
    var min = timevalue
    var sec = 0

    //add a leading zero (as a string value) if seconds less than 10
    if (sec < 10) {
        sec = "0" + sec;
    }

    // concatenate with colon
    var message = min.toString() + ":" + sec;

    // now change the display
    timeDisplay.innerHTML = message;
}


function hideButtons() {
    document.getElementById("inputArea").style.display = "none";
    document.getElementById("buttons-minutes-container").style.display = "none";
    document.getElementById("start").style.display = "none";
}
function showButtons() {
    document.getElementById("inputArea").style.display = "flex";
    document.getElementById("buttons-minutes-container").style.display = "flex";
    document.getElementById("start").style.display = "block";
}