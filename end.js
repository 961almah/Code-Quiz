const username = document.getElementById("username")
const saveScoreBtn = document.getElementById("saveScoreBtn")

// get score
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
// update final score
finalScore.innerText = mostRecentScore;

// if there is nothing typed in username, do not allow to submit
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// set maximum number of high scores to 7
const MAX_HIGH_SCORES = 7

saveHighScore = e => {
    e.preventDefault()

    // create score object
    const score = {
        score: mostRecentScore 
        name: username.value
    };
    highScores.push(score);

    // to sort from highest to lowest, substract a from b, if b > a b goes on top, 
    highScores.sort( (a,b) => b.score - a.score)

    // At index 7, no longer add up high score/cut off rest if they are smaller 
    highScores.splice(7)

    // update local storage with high scores, need to stringofy with JSON to be saved in the local storage's high scores
    localStorage.setItem("highscores", JSON.stringify(highScores));
    window.location.assign(index.html)
};

// get what's in local storage and post as high score

