const grid = [
  [1, 2, 3],
  [4, 8, 2],
  [1, 5, 3],
];

// Bottom-up DP Approach
// O(nm)t || O(n * m)s
function minCostPath(cost, x, y) {
  let dp = new Array(x + 1).fill(null).map(() => new Array(y + 1).fill(0)); // init matrix which will hold our tabulation

  dp[0][0] = cost[0][0]; // map initial tabulation with the starting point cost

  // Fill the first column
  for (let i = 1; i <= x; i++) {
    // At each column, add each previous cost from the cell above to keep a running tab
    dp[i][0] = dp[i - 1][0] + cost[i][0];
  }

  // Fill the first row
  for (let j = 1; j <= y; j++) {
    // At each row, add the previous cell cost to the current cost to keep a tabulation
    dp[0][j] = dp[0][j - 1] + cost[0][j];
  }

  for (let i = 1; i <= x; i++) {
    for (let j = 1; j <= y; j++) {
      // Fill in the rest of the dp table
      dp[i][j] =
        Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + cost[i][j]; // At each cell, check which direction is the cheapest to travel by comparing the three costs
    }
  }

  console.log(dp);
  return dp[x][y]; // return the min value
}

console.log(minCostPath(grid, 2, 2));
