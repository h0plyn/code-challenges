// O(n)t | O(1)s - where n is the length of the array
// Technically, O(n+n) time because the inner while loop
const smallest_subarray_with_given_sum = function (s, arr) {
  debugger;
  let windowSum = 0;
  let minLength = Infinity;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    while (windowSum >= s) {
      minLength = Math.min(minLength, windowEnd - windowStart + 1); // compare current length vs min length
      windowSum -= arr[windowStart]; // remove tail value in window
      windowStart += 1; // shrink window
    }
  }
  return minLength;
};

console.log(smallest_subarray_with_given_sum(7, [2, 1, 5, 2, 3, 2]));
