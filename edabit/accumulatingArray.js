// Create a function that takes in an array and returns an array of the accumulating sum.
// accumulatingArray([1, 2, 3, 4]) ➞ [1, 3, 6, 10]
// [1, 3, 6, 10] can be written as  [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4]

const accumulatingArray = (arr) => {
  let sum = 0;
  return arr.map((num) => (sum += num));
};
