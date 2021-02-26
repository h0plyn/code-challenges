function binarySearch(array, target) {
  return binaryHelper(array, target, 0, array.length - 1);
}

function binaryHelper(array, target, left, right) {
  if (left > right) return -1;
  let midpoint = Math.floor((left + right) / 2);
  if (array[midpoint] === target) {
    return midpoint;
  } else if (target > array[midpoint]) {
    return binaryHelper(array, target, midpoint + 1, right);
  } else {
    return binaryHelper(array, target, left, midpoint - 1);
  }
}

