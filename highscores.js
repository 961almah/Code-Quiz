const highScoresList = document.getElementById("highScoresList")
// get high scores from local storage, if it gets nothing add empty array
const highScores = JSON.parse(localStorage.getItem("highScores")) || []


highScoresList.innerHTML = highScores
.map(score => {
    // map: takes incoming array (highscores) and converts its items to a new array
    // get username and score and put them in a li
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
  })
  .join("");