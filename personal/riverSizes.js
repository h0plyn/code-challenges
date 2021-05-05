const matrix = [
  [1, 0, 1, 0],
  [0, 1, 1, 1],
  [1, 0, 0, 1],
];

const matrixTwo = [
  [1, 0, 0, 1, 0],
  [1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 0],
];

function riverSizes(matrix) {
  const sizes = [];
  const visitedNodes = matrix.map((row) => row.map(() => false));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (visitedNodes[row][col]) continue;
      nodeTraversal(row, col, matrix, visitedNodes, sizes);
    }
  }
  return sizes;
}

function nodeTraversal(row, col, matrix, visitedNodes, sizes) {
  let currentSize = 0;
  const nodesToExplore = [[row, col]];

  while (nodesToExplore.length) {
    const [row, col] = nodesToExplore.pop();

    if (visitedNodes[row][col]) continue;
    visitedNodes[row][col] = true;

    if (matrix[row][col] === 0) continue;
    currentSize += 1;

    getUnvisitedNeighbors(row, col, nodesToExplore, visitedNodes, matrix);
  }

  if (currentSize > 0) sizes.push(currentSize);
}

function getUnvisitedNeighbors(row, col, nodesToExplore, visitedNodes, matrix) {
  // Validate the row and col inputs
  // Look Up
  if (row > 0 && !visitedNodes[row - 1][col])
    nodesToExplore.push([row - 1, col]);
  // Look Down
  if (row < matrix.length - 1 && !visitedNodes[row + 1][col])
    nodesToExplore.push([row + 1, col]);
  // Look Left
  if (col > 0 && !visitedNodes[row][col - 1])
    nodesToExplore.push([row, col - 1]);
  // Look Right
  if (col < matrix[row].length - 1 && !visitedNodes[row][col + 1])
    nodesToExplore.push([row, col + 1]);
}

console.log(riverSizes(matrix));
console.log(riverSizes(matrixTwo));
