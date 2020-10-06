// You have an array of numbers.
// Your task is to sort ascending odd numbers but even numbers must be on their places.
// Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.

function sortArray(array) {
  let oddArr = array.filter((el) => el % 2 === 1).sort((a, b) => a - b);
  let sortedArr = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sortedArr.push(oddArr.shift());
    } else {
      sortedArr.push(array[i]);
    }
  }

  return sortedArr;
}
