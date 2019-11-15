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



//This was working when it was attached to the start quiz button, now I need it to run when quiz.html loads

var timeEl = document.querySelector("#timer");

var secondsLeft = 76;

function startQuiz() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left in quiz";

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
    document.querySelector(".show").setAttribute("style", "display:none");
    document.querySelector(".hide").setAttribute("style", "display:inline");
    runQuiz();
}

var questionQuiz = document.getElementById("ask");
var firstChoice = document.getElementById("button1");
var secondChoice = document.getElementById("button2");
var thirdChoice = document.getElementById("button3");
var fourthChoice = document.getElementById("button4");
var userResponse = [];

//This also worked at one point when initiated by button. Now won't work even when attached, 
//console says 'questions line 35 undefined'
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




function askAway() {
    console.log("askAway function was called");
    for (var i = 0; i < questions.length; i++) {
        questionQuiz.textContent = questions[i].title;
        firstChoice.textContent = questions[i].choices[0];
        secondChoice.textContent = questions[i].choices[1];
        thirdChoice.textContent = questions[i].choices[2];
        fourthChoice.textContent = questions[i].choices[3];
    }};

    askAway();

