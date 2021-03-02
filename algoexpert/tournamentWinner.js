// Naive Solution
// O(n^2)t | O(k)s
// O(k)s represents the number of keys stored in our scorecard data structure
function tournamentWinner(competitions, results) {
  let scorecard = {};

  for (let i = 0; i < results.length; i++) {
    let currentWinner = results[i] ? 0 : 1;
    let currentCompetition = competitions[i];
    for (let j = 0; j < currentCompetition.length; j++) {
      if (!scorecard[currentCompetition[j]])
        scorecard[currentCompetition[j]] = 0;
    }
    scorecard[currentCompetition[currentWinner]] += 3;
  }
  let sortedScorecard = Object.entries(scorecard).sort((a, b) => b[1] - a[1]);
  return sortedScorecard[0][0];
}
