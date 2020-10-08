// Write a function that returns the total number of non-nested items in a nested array.

function getLength(arr, count = 0) {
  if (arr.length === 0) return 0;

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      count += getLength(el);
    } else {
      count++;
    }
  });

  return count;
}
