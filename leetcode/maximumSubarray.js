// Using Kadane's Algorithm
// O(n)t | O(1)s - where n is the length of the input array
var maxSubArray = function (nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current += nums[i]; // add the value at idx to running sum
    max = Math.max(max, current); // check which is greater and set the max
    current = Math.max(current, 0);
  }

  return max;
};

console.log(maxSubArray([3, 5, -9, 1, 3, -2, 3, 4, 7, 2, -9, 6, 3, 1, -5, 4]));
