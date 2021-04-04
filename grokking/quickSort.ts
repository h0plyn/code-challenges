// O(nlogn)t | O(n)s
// function quickSort(arr: number[]): number[] {
//   if (arr.length < 2) {
//     return arr;
//   } else {
//     const pivot: number = arr[0];
//     const lesser: number[] = arr.slice(1).filter((num) => {
//       if (num <= pivot) return num;
//     });
//     const greater: number[] = arr.slice(1).filter((num) => {
//       if (num > pivot) return num;
//     });

//     return [...quickSort(lesser), pivot, ...quickSort(greater)];
//   }
// }

// O(nlogn)t average case, O(n^2)t worst case
function quickSortTwo(arr: number[]): number[] {
  if (arr.length < 2) return arr;

  const pivot: number = arr[0];
  const left: number[] = [];
  const right: number[] = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSortTwo(left), pivot, ...quickSortTwo(right)];
}

const unsortedArr = [
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
console.log(quickSortTwo([10, 5, 2, 3]));

console.log(quickSortTwo(unsortedArr));
