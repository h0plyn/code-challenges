// O(n)t | O(1)s - where n is the length of the array
const pair_with_targetsum = function (arr, target_sum) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const currentSum = arr[left] + arr[right];

    if (currentSum === target_sum) {
      return [left, right];
    } else if (currentSum < target_sum) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return [-1, -1];
};

// O(n)t | O(n)s - where n is the length of the array
const pair_with_targetsum = (arr, target_sum) => {
  let seen = {};
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    let pair = target_sum - current;
    if (pair in seen) return [seen[pair], i];
    seen[current] = i;
  }
  return [-1, -1];
};
