// O(nlogn)t | O(n)s - where n is the length of the input array
export function mergeOverlappingIntervals(array: number[][]) {
  const sorted: number[][] = array.sort((a, b) => a[0] - b[0]);
  let merged: number[][] = [[...sorted[0]]];
  let currentInterval: number = 0;

  for (let i = 1; i < sorted.length; i++) {
    if (merged[currentInterval][1] < sorted[i][0]) {
      merged.push(sorted[i]);
      currentInterval += 1;
    } else {
      if (merged[currentInterval][1] < sorted[i][1]) {
        merged[currentInterval][1] = sorted[i][1];
      }
    }
  }

  return merged;
}
