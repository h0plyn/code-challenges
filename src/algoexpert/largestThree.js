// O(n)t | O(1)s
function findThreeLargestNumbers(array) {
  let largest = [];

  for (let i = 0; i <= array.length; i++) {
    if (!largest[2] || array[i] >= largest[2]) {
      if (largest[2]) {
        largest[0] = largest[1];
        largest[1] = largest[2];
      }

      largest[2] = array[i];
      continue;
    }

    if (!largest[1] || array[i] >= largest[1]) {
      if (largest[1]) largest[0] = largest[1];
      largest[1] = array[i];
      continue;
    }

    if (!largest[0] || array[i] >= largest[0]) largest[0] = array[i];
  }

  return largest;
}
