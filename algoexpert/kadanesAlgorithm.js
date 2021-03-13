// O(n)t | O(1)s - where n is the length of the array
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];

  for (let i = 1; i < array.length; i++) {
    const num = array[i]; // add curr idx to running sub arr
    maxEndingHere = Math.max(num, maxEndingHere + num); // is the max sub arr here > the num at idx / handles negatives
    maxSoFar = Math.max(maxSoFar, maxEndingHere); // store larger max sub array
  }

  return maxSoFar;
}
