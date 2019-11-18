var timeEl = document.querySelector("#timer");
var secondsLeft = 76;
var questionQuiz = document.getElementById("ask");
var firstChoice = document.getElementById("button1");
var secondChoice = document.getElementById("button2");
var thirdChoice = document.getElementById("button3");
var fourthChoice = document.getElementById("button4");
var questionIndex = 0;
var score = 0;

function startQuiz() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz";

        if (secondsLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
    document.querySelector(".show").setAttribute("style", "display:none");
    document.querySelector(".hide").setAttribute("style", "display:inline");
    giveQuestionAnswerSet();
}

function giveQuestionAnswerSet() {
    if (questionIndex <= 4) {
    console.log("giveQuestionAnswerSet function was called");
    questionQuiz.textContent = questions[questionIndex].title;
    firstChoice.textContent = questions[questionIndex].choices[0];
    secondChoice.textContent = questions[questionIndex].choices[1];
    thirdChoice.textContent = questions[questionIndex].choices[2];
    fourthChoice.textContent = questions[questionIndex].choices[3];
    questionIndex = questionIndex + 1;
    } 
};


document.getElementById("button1").addEventListener("click", nextSet);
document.getElementById("button2").addEventListener("click", nextSet);
document.getElementById("button3").addEventListener("click", nextSet);
document.getElementById("button4").addEventListener("click", nextSet);

var listItem = 0;

function nextSet() {
    if (questionIndex <= 4) {
    console.log("nextSet was called");
    var userResponse = this.textContent;
    if (userResponse === questions[listItem].answer) {
        score++;
        document.querySelector(".display-current-score").textContent = score;
    } else {
        secondsLeft = secondsLeft - 15;
        document.querySelector(".display-current-score").textContent = score;
    }
    giveQuestionAnswerSet();
    localStorage.setItem("score", score);
    listItem = listItem +1;
} else {
    endQuiz();
}    
};

function endQuiz() {
    console.log("endQuiz was called");
    document.querySelector(".hide").setAttribute("style", "display:none");
    document.querySelector(".second-hide").setAttribute("style", "display:inline");
    document.querySelector(".display-final-score").textContent = score;
};
/*

function nextSetTwo() {
    console.log("nextSet2 ran");

    var userResponseTwo = document.getElementsByClassName("button3").textContent;
    if (userResponseTwo === questions[0].answer) {
        score++;
        alert("CORRECT");
    } else {
        secondsLeft = secondsLeft - 15;
        alert("WRONG");
    }


}
*/



