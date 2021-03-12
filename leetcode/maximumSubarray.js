// Using Kadane's Algorithm
// O(n)t | O(1)s - where n is the length of the input array
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = Math.max(max, 0);

  for (let i = 1; i < nums.length; i++) {
    current += nums[i];
    max = Math.max(max, current);
    current = Math.max(current, 0);
  }

  return max;
};
