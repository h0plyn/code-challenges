const fs = require('fs');

const numArr = fs
  .readFileSync('src/adventOfCode/aoc_dayOne.txt', 'utf8')
  .split('\n')
  .map((el) => Number(el));

function findNum(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return arr[i] * arr[j];
      }
    }
  }
}
findNum(numArr, 2020);
