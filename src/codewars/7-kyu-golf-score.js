function golfScoreCalculator(parList, scoreList){
    let parArr = parList.split(''),
        scoreArr = scoreList.split(''),
        score = [];

        for (let i = 0; i < parArr.length; i++){
            let holePar = parArr[i];
            let holeScore = scoreArr[i];

            score.push(holeScore - holePar);
       }

   return score.reduce((a, b) => a + b);
}

golfScoreCalculator('443454444344544443', '353445334534445344')