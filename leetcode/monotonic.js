// O(n)t | O(1)s
var isMonotonic = function(nums) {
  let increasing = decreasing = true

  for (let i = 0; i < nums.length; i++) { // if we find a number that isn't asc or desc monotonically, flip a boolean
      if (nums[i] > nums[i+1]) increasing = false
      if (nums[i] < nums[i+1]) decreasing = false

  }

   return increasing || decreasing // if we've encountered a number that doesn't fit the pattern, this will return false
};
