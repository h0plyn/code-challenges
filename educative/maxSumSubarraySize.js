// O(n)t | O(n)s
// Sliding window pattern
function maxSumSubarrayOfK(arr, k) {
  let maxSum = 0;
  let windowStart = 0;
  let windowSum = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add to current window sum
    if (windowEnd >= k - 1) { // if at end of current window constraint
      maxSum = Math.max(windowSum, maxSum); // check if current window holds greatest sum
      windowSum -= arr[windowStart]; // subtract the tail element
      windowStart += 1; // slide window forward
    }
  }
  return maxSum;
}
