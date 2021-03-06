/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// O(n)t | O(1)s - where n is the length of the arr
var getWinner = function (arr, k) {
  let winCount = 0;
  let winner = arr[0]; // initialize to 0th idx
  let i = 1;

  while (i < arr.length && winCount < k) {
    // loop while we're inbounds and under winCount threshold
    if (winner < arr[i]) {
      winner = arr[i]; // swap winner for larger number
      winCount = 1; // re-init win count
    } else {
      winCount += 1;
    }
    i++; // traverse
  }
  return winner;
};

