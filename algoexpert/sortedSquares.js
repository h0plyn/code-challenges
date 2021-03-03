function sortedSquaredArray(array) {
  let squares = [];

  for (let num of array) {
    if (num < 0) Math.abs(num);
    let squaredEl = num * num;
    squares.push(squaredEl);
  }

  squares.sort((a, b) => a - b);
  return squares;
}
