// https://www.chegg.com/homework-help/questions-and-answers/1-product-defects-quality-agent-responsible-inspecting-samples-finished-products-productio-q62329575
// Maximum sub square matrix in a matrix

// Bottom up Dynamic Programming approach

const allSamples = [
  [0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0],
  [0, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1, 1],
];

function largestArea(samples) {
  const dp = new Array(samples.length + 1)
    .fill(null)
    .map(() => new Array(samples[0].length + 1).fill(0)); // init dp matrix

  for (let i = 1; i < samples.length; i++) {
    for (let j = 1; j < samples[i].length; j++) {
      if (samples[i][j] === 1) {
        // if we find a defect
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1; // find the min of the possible neighbors and add 1, this builds the size of our square
      } else {
        dp[i][j] = 0; // otherwise, mark as 0 to stop from building
      }
    }
  }

  let maxSize = 0;
  for (let row = 0; row < dp.length; row++) {
    // traverse the dp matrix to find the largest square we found
    for (let col = 0; col < dp[row].length; col++) {
      if (dp[row][col] > maxSize) maxSize = dp[row][col];
    }
  }

  return maxSize;
}

console.log(largestArea(allSamples));
