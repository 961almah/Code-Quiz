const username = document.getElementById("username")
const saveScoreBtn = document.getElementById("saveScoreBtn")

// get score
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// update final score
finalScore.innerText = mostRecentScore;

// use JSON to stringify our 

// if there is nothing typed in username, do not allow to submit
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
    e.preventDefault()

    // create score object
    const score = {
        score: mostRecentScore
        name: username.value
    };
    highScores.push(score);
};

// get what's in local storage and post as high score
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

