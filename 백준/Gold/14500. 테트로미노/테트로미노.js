const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...board] = input;
let [n, m] = num.split(' ').map(Number);
board = board.map((v) => v.split(' ').map(Number));

function solution(n, m, board) {
  let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  function dfs(row, col, sum, count) {
    // console.log(row, col, sum, count);
    if (count === 4) {
      return sum;
    }
    let result = sum;
    for (let [dr, dc] of dirs) {
      let nextRow = row + dr;
      let nextCol = col + dc;
      if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
        if (isVisited[nextRow][nextCol]) continue;
        isVisited[nextRow][nextCol] = true;
        result = Math.max(
          result,
          dfs(nextRow, nextCol, sum + board[nextRow][nextCol], count + 1),
        );
        isVisited[nextRow][nextCol] = false;
      }
    }
    return result;
  }

  let result = 0;

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      // console.log(`start: ${row},${col}`);
      isVisited[row][col] = true;
      result = Math.max(result, dfs(row, col, board[row][col], 1));
      isVisited[row][col] = false;
      // console.log(`start: ${row},${col} : ㅏ 모양`);
      if (row - 1 >= 0 && row + 1 < n) {
        isVisited[row - 1][col] = true;
        isVisited[row + 1][col] = true;
        isVisited[row][col] = true;
        result = Math.max(
          result,
          dfs(
            row,
            col,
            board[row][col] + board[row - 1][col] + board[row + 1][col],
            3,
          ),
        );
        isVisited[row - 1][col] = false;
        isVisited[row + 1][col] = false;
        isVisited[row][col] = false;
      }
      // console.log(`start: ${row},${col} : ㅗ 모양`);
      if (col - 1 >= 0 && col + 1 < m) {
        isVisited[row][col - 1] = true;
        isVisited[row][col + 1] = true;
        isVisited[row][col] = true;
        result = Math.max(
          result,
          dfs(
            row,
            col,
            board[row][col] + board[row][col - 1] + board[row][col + 1],
            3,
          ),
        );
        isVisited[row][col - 1] = false;
        isVisited[row][col + 1] = false;
        isVisited[row][col] = false;
      }
    }
  }
  return result;
}

console.log(solution(n, m, board));
