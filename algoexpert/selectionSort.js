// O(n^2)t | O(1)s
function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let smallestIdx = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIdx]) smallestIdx = j;
    }

    let temp = array[i];
    array[i] = array[smallestIdx];
    array[smallestIdx] = temp;
  }

  return array;
}
