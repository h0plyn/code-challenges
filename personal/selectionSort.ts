function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    // hold sorted subarray end idx
    let smallestIdx: number = i; // hold current smallest numbers idx
    for (let j = i + 1; j < arr.length; j++) {
      // loop through unsorted subarray
      if (arr[j] < arr[smallestIdx]) {
        smallestIdx = j; // update with the smallest number idx
      }
    }
    swap(arr, i, smallestIdx); // swap smallest int into the sorted subarray
  }

  return arr;
}

function swap(arr: number[], currentIdx: number, smallest: number): void {
  let temp = arr[currentIdx];
  arr[currentIdx] = arr[smallest];
  arr[smallest] = temp;
}

console.log(selectionSort([35, 64, 111, 88, 94, 141, 156]));
