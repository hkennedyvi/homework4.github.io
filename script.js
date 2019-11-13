/*var gameTimer = setInterval(myTimer, 1000);

function myTimer() {
    var ugh = new Date();
    document.getElementById("demo").innerHTML = ugh.toLocaleString();
}*/

var timeEl = document.querySelector("#timer");

var secondsLeft = 76;

function startTimer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz";

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}