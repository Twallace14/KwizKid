const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn')
const highScoreIndicator = document.getElementById('highScoreIndicator')

const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGH_SCORES = 3;
console.log(highScores);

finalScore.innerText = mostRecentScore;

if(highScores[2] === undefined || mostRecentScore > highScores[2].score){
  highScoreIndicator.innerText = "TOP SCORE";
}


username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value; 
})

saveHighScore = e => {
  e.preventDefault();

 
 const score = {
     score: mostRecentScore,
     name: username.value
 };

 highScores.push(score);
 highScores.sort((a,b) => b.score - a.score);
 highScores.splice(3);

 localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign('index.html')
};