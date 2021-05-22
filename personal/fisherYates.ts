// Fisher Yates Algo - Shuffle an array randomly in place
// Store the shuffled array in the end of the arr
// Choose a random element from the front of the array
// Swap the random element

const fisherYates = (arr: number[]): number[] => {
  for (let i = arr.length - 1; i > 0; i--) {
    let randomIdx: number = Math.floor(Math.random() * i); // making sure the idx is still unshuffled by multiplying by i

    let temp: number = arr[i];
    arr[i] = arr[randomIdx];
    arr[randomIdx] = temp;
  }

  return arr;
};

const arrOne = [1, 2, 3, 4, 5, 6];
const arrTwo = [104, 999, 2034, 6, 1, 10, 10];

console.log(fisherYates(arrOne));
console.log(fisherYates(arrOne));
console.log(fisherYates(arrOne));
console.log(fisherYates(arrOne));
console.log(fisherYates(arrTwo));
console.log(fisherYates(arrTwo));
console.log(fisherYates(arrTwo));
