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
let score = 0;
// determine question number
let questionCounter = 0;

// create array with objects inside to take questions out of it and add them into questions
let questions = [
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsjknf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
];

// constants

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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
    // when game is started, increment questions 
    questionCounter++;
    // randomize questions and base it on length
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    // get the current question from availableQuestions and randomize it
    currentQuestion = availableQuestions[questionIndex];
    question.innerHTML = currentQuestion.question;
};
startGame();