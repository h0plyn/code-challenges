// O(n)t | O(1)s - where n is the length of the array
//
const remove_duplicates = function (arr) {
  let nextUnique = 1; // idx where next unique number will be placed
  let current = 1; // iterator

  while (current < arr.length) {
    // if current value isn't equal to the end of the subarray
    if (arr[nextUnique - 1] !== arr[current]) {
      // replace the unique value
      arr[nextUnique] = arr[current];
      nextUnique += 1; //increment the end of the subarray for the next unique
    }
    current += 1; // increment iterator
  }

  return nextUnique; // returns length of the unique subarray
};
