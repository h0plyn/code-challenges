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

console.log(quickSortTwo([10, 5, 2, 3]));
