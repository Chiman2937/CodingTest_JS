const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...board] = input;

function solution(n, board) {
  let blindBoard = new Array(n).fill(0).map(() => new Array(n).fill('R'));
  let isVisited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let normalCount = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      blindBoard[row][col] = board[row][col] === 'G' ? 'R' : board[row][col];
      if (isVisited[row][col]) continue;
      isVisited[row][col] = true;
      normalCount++;
      let color = board[row][col];
      let queue = [[row, col]];
      while (queue.length) {
        let [r, c] = queue.shift();
        for (let [dr, dc] of dirs) {
          let nextRow = r + dr;
          let nextCol = c + dc;
          if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
            if (
              !isVisited[nextRow][nextCol] &&
              board[nextRow][nextCol] === color
            ) {
              isVisited[nextRow][nextCol] = true;
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }

  let blindCount = 0;
  isVisited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < n; col++) {
      if (isVisited[row][col]) continue;
      isVisited[row][col] = true;
      blindCount++;
      let color = blindBoard[row][col];
      let queue = [[row, col]];
      while (queue.length) {
        let [r, c] = queue.shift();
        for (let [dr, dc] of dirs) {
          let nextRow = r + dr;
          let nextCol = c + dc;
          if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
            if (
              !isVisited[nextRow][nextCol] &&
              blindBoard[nextRow][nextCol] === color
            ) {
              isVisited[nextRow][nextCol] = true;
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }

  return normalCount + ' ' + blindCount;
}

console.log(solution(+n, board));
