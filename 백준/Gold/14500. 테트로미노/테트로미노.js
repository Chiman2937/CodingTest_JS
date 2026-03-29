const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [n, m] = num.split(' ').map(Number);
let board = list.map((v) => v.split(' ').map(Number));

function solution(n, m, board) {
  let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(false));

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  function dfs(r, c, sum, count) {
    if (count === 4) {
      return sum;
    }
    let result = sum;
    for (let [dr, dc] of dirs) {
      let nr = r + dr;
      let nc = c + dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
        if (!isVisited[nr][nc]) {
          isVisited[nr][nc] = true;
          result = Math.max(
            result,
            dfs(nr, nc, sum + board[nr][nc], count + 1),
          );
          isVisited[nr][nc] = false;
        }
      }
    }
    return result;
  }

  function tShape(r, c, base) {
    let sumList = [];
    for (let [dr, dc] of dirs) {
      let nr = r + dr;
      let nc = c + dc;
      if (nr >= 0 && nr < n && nc >= 0 && nc < m) {
        sumList.push(board[nr][nc]);
      }
    }
    if (sumList.length < 3) return 0;
    sumList.sort((a, b) => b - a);
    return base + sumList.reduce((a, c, i) => a + (i < 3 ? c : 0), 0);
  }

  let result = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      isVisited[r][c] = true;
      result = Math.max(result, dfs(r, c, board[r][c], 1));
      isVisited[r][c] = false;
      result = Math.max(result, tShape(r, c, board[r][c]));
    }
  }

  return result;
}

console.log(solution(n, m, board));
