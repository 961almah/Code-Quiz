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

saveHighScore = e => {
    e.preventDefault()
}