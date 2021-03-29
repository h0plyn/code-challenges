const directions = [
  [-2, -1],
  [-2, 1],
  [-1, 2],
  [1, 2],
  [2, 1],
  [2, -1],
  [1, -2],
  [-1, -2],
];

// Top down Dynamic Programming approach
var knightProbability = function (N, K, r, c) {
  // Build K amount of N x N chess boards
  const dp = new Array(K + 1)
    .fill(0)
    .map(() => new Array(N).fill(0).map(() => new Array(N).fill(undefined)));

  return recurse(N, K, r, c, dp);
};

var recurse = function (N, K, r, c, dp) {
  if (r < 0 || r >= N || c < 0 || c >= N) return 0; // Check for out of bounds moves
  if (K === 0) return 1; // Our moves are exhausted

  if (dp[K][r][c]) return dp[K][r][c]; // If we've visited this space on this K board, return result

  let finalProbability = 0;
  // Check all potential moves from this space, add the final probablity
  for (const [coordOne, coordTwo] of directions) {
    finalProbability += recurse(N, K - 1, r + coordOne, c + coordTwo, dp) / 8; // divide by 8 for 8 possible moves
  }

  dp[K][r][c] = finalProbability; // Store current board position final probablity of being inbounds on a move

  return dp[K][r][c]; // Return probability
};
