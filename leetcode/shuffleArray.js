// O(n)t | O(n)s - where n is the length of the input array
var shuffle = function (nums, n) {
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    if (!nums[i + n]) break;
    ans.push(nums[i]);
    ans.push(nums[i + n]);
  }
  return ans;
};
