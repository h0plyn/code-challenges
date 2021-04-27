function spiralTraverse(array: number[][]) {
  let startCol = 0,
    endCol = array[0].length - 1;
  let startRow = 0,
    endRow = array.length - 1;
  const result = [];

  while (startRow <= endRow && startCol <= endCol) {
    // loop until pointers cross
    for (let col = startCol; col <= endCol; col++) {
      // add the first row
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row <= endRow; row++) {
      // add the last column, traversing down the matrix
      result.push(array[row][endCol]);
    }

    for (let col = endCol - 1; col >= startCol; col--) {
      // add the last row, in reverse
      if (startRow === endRow) break; // handle edge case for single inner row
      result.push(array[endRow][col]);
    }

    for (let row = endRow - 1; row > startRow; row--) {
      // add the first column, traversing up
      if (startCol === endCol) break; // handle edge case for single inner column
      result.push(array[row][startCol]);
    }

    startRow += 1; // increment/decrement the row column to move the traversal inwards
    endRow -= 1;
    startCol += 1;
    endCol -= 1;
  }
  return result;
}
