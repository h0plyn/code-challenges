/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n)t | O(1)s - where n is the length of the input array
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    first = -1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      first = mid;
      last = mid;
      break;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  if (first > last) return [-1, -1];

  while (nums[first - 1] === target) first -= 1;
  while (nums[last + 1] === target) last += 1;

  return [first, last];
};

// O(logn)t | O(1)s - where n  is the length of the input array
var searchRange = function (nums, target) {
  let left = 0,
    right = nums.length - 1,
    first = -1,
    last = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      first = mid;
      right = mid - 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      last = mid;
      left = mid + 1;
    } else if (target > nums[mid]) {
      left = mid + 1;
    } else if (target < nums[mid]) {
      right = mid - 1;
    }
  }

  return [first, last];
};
