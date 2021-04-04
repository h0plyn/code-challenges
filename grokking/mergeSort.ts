// Helper function to split array until they are sorted (length 1)
function split(arr: number[]): number[][] {
  const midpoint: number = Math.ceil(arr.length / 2);

  const firstHalf: number[] = arr.slice(0, midpoint);
  const secondHalf: number[] = arr.slice(midpoint);

  return [firstHalf, secondHalf];
}

function merge(arr1: number[], arr2: number[]) {
  const sortedArr: number[] = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      sortedArr.push(arr1.shift());
    } else {
      sortedArr.push(arr2.shift());
    }
  }
  return sortedArr.concat(arr1.slice()).concat(arr2.slice());
}

// Main Recursive Function
function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) {
    return arr;
  } else {
    const newArr: number[][] = split(arr);
    const left: number[] = newArr[0];
    const right: number[] = newArr[1];

    return merge(mergeSort(left), mergeSort(right));
  }
}

const unsortedArr: number[] = [
  31,
  27,
  28,
  42,
  13,
  8,
  11,
  30,
  17,
  41,
  15,
  43,
  1,
  36,
  9,
  16,
  20,
  35,
  48,
  37,
  7,
  26,
  34,
  21,
  22,
  6,
  29,
  32,
  49,
  10,
  12,
  19,
  24,
  38,
  5,
  14,
  44,
  40,
  3,
  50,
  46,
  25,
  18,
  33,
  47,
  4,
  45,
  39,
  23,
  2,
];

console.log(mergeSort(unsortedArr));
