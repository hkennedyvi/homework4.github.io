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
    ///etc.
  ];



var questionQuiz = document.getElementById("ask");
var firstChoice = document.getElementById("button1");
var secondChoice = document.getElementById("button2");
var thirdChoice = document.getElementById("button3");
var fourthChoice = document.getElementById("button4");



function askAway() {
  console.log("askAway function was called");
  for (var i = 0; i < questions.length; i++) {
    questionQuiz.textContent = questions[i].title;
    firstChoice.textContent = questions[i].choices[0];
    secondChoice.textContent = questions[i].choices[1];
    thirdChoice.textContent = questions[i].choices[2];
    fourthChoice.textContent = questions[i].choices[3];
  }
}

askAway();


//   var themeSwitcher = document.querySelector("#theme-switcher");
// var container = document.querySelector(".container");
// var mode = "dark";

// themeSwitcher.addEventListener("click", function() {
//   if (mode === "dark") {
//     mode = "light";
//     container.setAttribute("class", "light");
//   }
//   else {
//     mode = "dark";
//     container.setAttribute("class", "dark");
//   }
// });