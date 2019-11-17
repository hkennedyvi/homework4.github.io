var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "The first letter of the alphabet is",
        choices: ["a", "b", "c", "d"],
        answer: "a"
    },
    {
        title: "The first number is",
        choices: ["1", "2", "3", "4"],
        answer: "1"
    },
    {
        title: "The last letter is",
        choices: ["w", "x", "y", "z"],
        answer: "z"
    },
    ///etc.
];





var timeEl = document.querySelector("#timer");

var secondsLeft = 76;

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

var questionQuiz = document.getElementById("ask");
var firstChoice = document.getElementById("button1");
var secondChoice = document.getElementById("button2");
var thirdChoice = document.getElementById("button3");
var fourthChoice = document.getElementById("button4");



/*
var score = 0;

function runQuiz() {
    for (var i = 0; i < questions.length; i++) {
        var response = window.prompt(questions[i].prompt);

        if (response == questions[i].answer) {
            score++;
            alert("CORRECT");
        } else {
            alert("WRONG");
        }
    }
    localStorage.setItem("score", score);
    alert("You got " + score + "/" + questions.length);
};
*/

var questionIndex = 0;
var score = 0;


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

var userResponse = document.getElementsByClassName("quiz-button").textContent;

function nextSet() {
    if (questionIndex <= 4) {
    console.log("nextSet ran");

    //var userResponse = document.getElementsByName("button").textContent;
    if (userResponse === questions[0].answer) {
        score++;
        alert("CORRECT");
    } else {
        secondsLeft = secondsLeft - 15;
        alert("WRONG");
    }
    giveQuestionAnswerSet();
    localStorage.setItem("score", score);
} else {
    endQuiz();
}    
};

function endQuiz() {
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



