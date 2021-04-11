// O(n)t | O(n)s - where n is the length of the input array
function climbStairs(n: number): number {
  if (n === 1) return 1; // handle edge case
  let dp: number[] = new Array(n + 1).fill(0); // initialize dp

  dp[1] = 1; // idx 1 can only be reached one way
  dp[2] = 2; // idx 2 can be reached two ways (1 step or two steps)
  for (let i = 3; i <= n; i++) { // loop from the third step
    dp[i] = dp[i - 1] + dp[i - 2]; // for each step, they can be reached by adding 
  }

  return dp[n];
}
