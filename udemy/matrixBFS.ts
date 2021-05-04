import { TwoDimMatrix } from './matrixDFS';

const testMatrix: TwoDimMatrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

function matrixBFS(matrix: TwoDimMatrix): number[] {
  const ans: number[] = [];
  const seen: boolean[][] = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  const queue: number[][] | undefined = [[0, 0]];

  while (queue.length) {
    const current = queue.shift();
    const row: number = current![0];
    const col: number = current![1];

    if (row < 0 || row > matrix.length || col < 0 || col > matrix[0].length) {
      continue;
    }

    seen[row][col] = true;
    ans.push(matrix[row][col]);

    for (let i = 0; i < directions.length; i++) {
      const [rowDir, colDir] = directions[i];
      queue.push([row + rowDir, col + colDir]);
    }
  }

  return ans;
}

console.log(matrixBFS(testMatrix));
