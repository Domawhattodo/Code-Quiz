var questions = [
    {
        title: "Inside which tag of an HTML document do you put the JavaScript?",
        choices: ["<java>", "<body>", "<script>", "<head>"],
        answer: "<script>"
    },
    {
        title: "The condition in an if/else statement is enclosed within ______.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "What is the syntax for referencing an external script called 'abc.js'?",
        choices: ["<script class='abc.js'>", "<script href='abc.js'>", "<script link='abc.js'>", "<script src='abc.js'>"],
        answer: "<script src='abc.js'>"
    },
    {
        title: "Which type of pop up box will allow a user to type a response?",
        choices: ["input", "prompt", "alert", "confirm"],
        answer: "prompt"
    },
    {
        title: "What is a DOM in JavaScript?",
        choices: ["Data of Mine", "Document of Master", "Data Object Modal", "Document Object Model"],
        answer: "Document Object Model"
    },
    {
        title: "Is JS case-sensitive?",
        choices: ["Yes", "No"],
        answer: "Yes"
    },
];

var startBtn = document.getElementsByClassName("startBtn"),
    redoBtn = document.getElementsByClassName("redoBtn"),
    clearBtn = document.getElementsByClassName("clearBtn"),
    timerEl = document.getElementById("timer"),
    submitScoreEl = document.getElementsByClassName("submit-score"),
    userScore = document.getElementById("user-score"),
    newScore = document.getElementsByClassName("new-score"),
    submitBtn = document.querySelector("button.submitBtn"),
    secondsLeft = 90;

function setTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            // display option to enter name to scoreboard
            // 
        }


    }, 1000);
}

function startTimer () {
    setTimer();
// display questions
}








startBtn.addEventListener("click", startTimer);