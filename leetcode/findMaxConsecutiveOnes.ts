// O(n^2)t | O(1)s - brute force
function findMaxConsecutiveOnes(nums: number[]): number {
  let maxOnes: number = 0;
  for (let left = 0; left < nums.length; left++) {
    let numZeros: number = 0;

    for (let right = left; right < nums.length; right++) {
      if (nums[right] === 0) numZeros++;

      if (numZeros <= 1) {
        maxOnes = Math.max(maxOnes, right - left + 1);
      }
    }
  }
  return maxOnes;
}
