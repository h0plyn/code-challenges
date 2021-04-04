function binarySearch(arr: number[], target: number) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.round((low + high) / 2);
    let guess = arr[mid];

    if (guess === target) return mid;

    if (guess > target) high = mid - 1;
    else low = mid + 1;
  }

  return false;
}

console.log(binarySearch([1, 3, 5, 7, 9], 3)); // 1
console.log(binarySearch([1, 3, 5, 7, 9], -1)); // false
