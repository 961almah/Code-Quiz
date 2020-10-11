// get needed elements from HTML
const question = document.getElementById("question");
// convert choice-text to array 
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

// create variables:

// create object to add question and answers
let currentQuestion = {};
// give delay between answer and next question
let acceptingAnswers = true;
// create score 
let score = 0
// determine question number
let questionCounter = 0

// create array with objects inside to take questions out of it and add them into questions
let questions = [
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    }
]