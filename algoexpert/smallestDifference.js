// O(nlog(n) + mlog(m)) | O(1) - where n and me are the lengths of the input arrays
// nlog(n)/mlog(m) comes from sorting our arrays
function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);
  let current = Infinity;
  let smallest = Infinity;
  let idxOne = 0;
  let idxTwo = 0;
  let pair = [];

  while (idxOne < arrayOne.length && idxTwo < arrayTwo.length) {
    let firstNum = arrayOne[idxOne];
    let secondNum = arrayTwo[idxTwo];

    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idxOne += 1; // increment the smaller number to get us closer to the smallest diff
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idxTwo += 1; // increment the smaller number to get us closer to the smallest diff
    } else {
      return [firstNum, secondNum]; // if the numbers are equal, return the numbers
    }

    if (current < smallest) {
      smallest = current; // keep track of the smallest difference while iterating
      pair = [firstNum, secondNum]; // keep track of the pair with the smallest diff
    }
  }

  return pair;
}
