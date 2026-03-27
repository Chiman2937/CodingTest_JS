const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...table] = input;
let [n, m] = num.split(' ').map(Number);
table = table.map((v) => v.split(''));

function solution(n, m, table) {
  let queue = [];

  let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  // I 위치 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (table[i][j] === 'I') {
        queue.push([i, j]);
        isVisited[i][j] = true;
      }
    }
  }

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let result = 0;

  while (queue.length > 0) {
    let [row, col] = queue.shift();
    if (table[row][col] === 'P') result++;
    for (let [dr, dc] of dirs) {
      let nextRow = row + dr;
      let nextCol = col + dc;
      if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
        if (table[nextRow][nextCol] !== 'X' && !isVisited[nextRow][nextCol]) {
          queue.push([nextRow, nextCol]);
          isVisited[nextRow][nextCol] = true;
        }
      }
    }
  }

  return result === 0 ? 'TT' : result;
}

console.log(solution(n, m, table));
