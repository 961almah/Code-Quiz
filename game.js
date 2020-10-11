// get needed elements from HTML
const question = document.getElementById("question");
// convert choice-text to array 
const choices = Array.from(document.getElementsByClassName("choice-text"));
console.log(choices);

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
        question: "dsdgsdf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsdfsf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "ddsfnf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "ds2effnf",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
    },
    {
        question: "dsj567f",
        choice1: "dsf",
        choice2: "asf",
        choice3: "3eqwd",
        choice4: "fksaj",
        answer: 1
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
    choice.addEventListener('click', (e) => {
        // if not taking answers, return nothing
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        // make the selected choice be the targeted element
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        // after you select your answer, get a new question
        getNewQuestion();
    });
});

startGame();