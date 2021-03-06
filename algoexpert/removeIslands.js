// O(w*h)t | O(w*h)s
// w is the width of our matrix
// h is the height of our matrix
function removeIslands(matrix) {
  // Build adjacency matrix
  let visited = matrix.map((row) => row.map(() => false));

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // Find land (1) that is touching the border
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;

      if (!isBorder) continue;
      if (matrix[row][col] !== 1) continue;

      // DFS on land touching the border
      traverseLand(row, col, visited, matrix);
    }
  }

  // Loop through the interior of the input matrix, remove any unvisted pieces of land (Islands)
  // These islands did not connect to the border of the matrix therefore they could not be visited
  // through a DFS run on all of the neighboring land.
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (visited[row][col]) continue;
      // Island set to 0
      matrix[row][col] = 0;
    }
  }
  return matrix;
}

function traverseLand(startRow, startCol, visited, matrix) {
  // Use a stack for DFS
  let landToExplore = [[startRow, startCol]];

  while (landToExplore.length > 0) {
    let currentLand = landToExplore.pop();
    let [currentRow, currentCol] = currentLand;

    // Skip already visited land
    if (visited[currentRow][currentCol]) continue;
    visited[currentRow][currentCol] = true;

    // Check for contiguous neighboring land
    const neighboringLand = traverseNeighboringLand(
      currentRow,
      currentCol,
      matrix
    );
    for (let neighbor of neighboringLand) {
      let [row, col] = neighbor;
      if (matrix[row][col] !== 1) continue;
      landToExplore.push(neighbor);
    }
  }
}

function traverseNeighboringLand(row, col, matrix) {
  let neighbors = [];

  // Make sure the neighbors are not out of bounds
  if (row - 1 >= 0) neighbors.push([row - 1, col]); // UP
  if (row + 1 < matrix.length) neighbors.push([row + 1, col]); // DOWN
  if (col - 1 >= 0) neighbors.push([row, col - 1]); // LEFT
  if (col + 1 < matrix[row].length) neighbors.push([row, col + 1]); // RIGHT

  return neighbors;
}
