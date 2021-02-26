function isMonotonic(array) {
  let pos = array[0] >= array[1] ? true : false;
  let neg = array[0] <= array[1] ? true : false;

  for (let i = 0; i <= array.length - 1; i++) {
    if (pos) {
      if (array[i] < array[i + 1]) return false;
    } else if (neg) {
      if (array[i] > array[i + 1]) return false;
    }
  }

  return true;
}

console.log(isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 8, 9, 10, 11]));
