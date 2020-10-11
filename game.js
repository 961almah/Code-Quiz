// get needed elements from HTML
const question = document.getElementById("question");
// convert choice-text to array 
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

const questionCounterText = document.getElementById("questionCounter")
const scoreText = document.getElementById("score")

// create variables:

// create object to add question and answers
let currentQuestion = {};
// give delay between answer and next question
let acceptingAnswers = false;
// create score 
let score = 0;
// determine question number
let questionCounter = 0;

// create array with objects inside to take questions out of it and add them into questions
let questions = [
    {
        question: "Which of the following is a front-end language?",
        choice1: "Ruby",
        choice2: "CSS",
        choice3: "C++",
        choice4: "Python",
        answer: 2
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "style",
        choice2: "scripting",
        choice3: "script",
        choice4: "javascript",
        answer: 3
    },
    {
        question: "What does HTML stand for?",
        choice1: "Hyper Trainer Marking Language",
        choice2: "Hyper Text Marketing Language",
        choice3: "Hyper Text Markup Language",
        choice4: "Hyper Text Markdown Language",
        answer: 3
    },
    {
        question: "How to call a class of 'container' in CSS?",
        choice1: ".container",
        choice2: "class:container",
        choice3: "ClassContainer",
        choice4: "#container",
        answer: 1
    },
    {
        question: "Which language is used to animate elements?",
        choice1: "HTML",
        choice2: ".NET",
        choice3: "CSS",
        choice4: "JavaScipt",
        answer: 4
    },
];

// constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    // set question counter and score at 0 at the start of each game
    questionCounter = 0;
    score = 0;
    // create new array, and add "questions" array into it and spread its items. This way, any change to "questions" will automatically change in availableQuestions
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    // if all questions are used then go to end page
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // go to end page
        return window.location.assign("/end.html")
    }

    // when game is started, increment questions 
    questionCounter++;
    // add interactive question counter for the hud with the question number/ max questions
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`


    // randomize questions and base it on length
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    
    // get the current question from availableQuestions and randomize it
    currentQuestion = availableQuestions[questionIndex];

    // give the html element of question the text of current question
    question.innerHTML = currentQuestion.question;
    
    // iterate through the choices in the same manner
    choices.forEach((choice) => {
        // get to dataset and get "number" attribute out of it
        const number = choice.dataset['number'];
        // out of current question, get choice, and get number out of it
        choice.innerText = currentQuestion['choice' + number];
    });
    // splice out question so it does not repeat
    availableQuestions.splice(questionIndex, 1);
    // allow to accept answers
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    // add event listener 
    choice.addEventListener('click', e => {
        // if not taking answers, return nothing
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        // make the selected choice be the targeted element
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // make class to display correct and incorrect answers
        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        // add class to choice container to select all of it when displaying correctness
        selectedChoice.parentElement.classList.add(classToApply)

        // then remove it after some time passing
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            // after you select your answer, get a new question
            getNewQuestion();
        }, 1000);
    });
});

startGame();