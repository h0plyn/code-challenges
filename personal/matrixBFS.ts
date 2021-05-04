type TwoDimMatrix = [number[], number[], number[], number[]];

const testMatrix: TwoDimMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

function matrixBFS(matrix: TwoDimMatrix): number[] {
  const visited: boolean[][] = matrix.map((row) => row.map(() => false));
  const ans: number[] = [];

  dfs(0, 0, matrix, visited, ans);

  return ans;
}

function dfs(
  row: number,
  col: number,
  matrix: TwoDimMatrix,
  visited: boolean[][],
  ans: number[]
) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    visited[row][col] === true
  )
    return;

  let directions: number[][] = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  ans.push(matrix[row][col]);
  visited[row][col] = true;

  for (let i = 0; i < directions.length; i++) {
    const [rowDir, colDir] = directions[i];
    dfs(row + rowDir, col + colDir, matrix, visited, ans);
  }
}

console.log(matrixBFS(testMatrix));
