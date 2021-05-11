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

// Sliding Window
// O(n)t | O(1)s
function findMaxConsecutiveOnes(nums: number[]): number {
  let left: number = 0;
  let right: number = 0;
  let maxOnes: number = 0;
  let zeros: number = 0;

  while (right < nums.length) { // while right is inbounds
      if (nums[right] === 0) {
          zeros++
      }

      while (zeros === 2) {
          if (nums[left] === 0) {
              zeros-- // remove the zero from the window
          }
          left++ // increment left side of window until only 1 zero is in the window
      }

      maxOnes = Math.max(maxOnes, right - left + 1) // update longest sequence
      right++ // expand window
  }
  return maxOnes;
};
