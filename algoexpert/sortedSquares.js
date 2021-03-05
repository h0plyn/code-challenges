// O(n)t | O(n)s
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let leftIdx = 0;
  let rightIdx = array.length - 1;

  for (let i = array.length - 1; i >= 0; i -= 1) {
    const smallerNum = array[leftIdx];
    const largerNum = array[rightIdx];

    if (Math.abs(smallerNum) > Math.abs(largerNum)) {
      sortedSquares[i] = smallerNum * smallerNum;
      leftIdx += 1;
    } else {
      sortedSquares[i] = largerNum * largerNum;
      rightIdx -= 1;
    }
  }
  return sortedSquares;
}

// Brute Force
// O(nlogn)t | O(n)s
// Built in sort is nlogn
// function sortedSquaredArray(array) {
//   let squares = [];

//   for (let num of array) {
//     if (num < 0) Math.abs(num);
//     let squaredEl = num * num;
//     squares.push(squaredEl);
//   }

//   squares.sort((a, b) => a - b);
//   return squares;
// }
