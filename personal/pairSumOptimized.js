function pairSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let currSum = arr[left] + arr[right];
    if (currSum === target) return true;
    else if (currSum < target) left++;
    else right--;
  }

  return false;
}

// normal test cases
console.log(pairSum([1, 1, 2, 3, 4, 5], 7)); //true
console.log(pairSum([1, 2, 3, 4, 5], 10)); //false
console.log(pairSum([1, 2, 3, 7, 8], 7)); //false
console.log(pairSum([1, 2, 3, 4, 5], 2)); //false
