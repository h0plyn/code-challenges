// -------------------------------------- MultiDimSum -------------------------------- //

// Write a method to find the sum of all numbers in a multidimensional array of integers.

// SAMPLE OUTPUT
// Given a multidimensional Array: a = [1, [2, [3]],  multiDimSum would return 21.
// We get 21 by adding up all the elements of the array: 1 + 2 + 3 + 4 + 5 + 6 = 21.

// HINTS
// * This problem should probably take about 12 lines or less.
// * You may have to use recursion.

function multiDimSumArray(arr) {
  debugger;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (Array.isArray(currentElement)) {
      sum += multiDimSumArray(currentElement);
    } else {
      sum += currentElement;
    }
  }
  return sum;
}

console.log(multiDimSumArray([1, [2, [3]]]));
