const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...board] = input;
let [n, m] = num.split(' ').map(Number);

function solution(n, m, board) {
  let visited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  visited[0][0] = 1;
  let queue = [[0, 0, 1]];
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  while (queue.length) {
    let [r, c, distance] = queue.shift();
    if (r === n - 1 && c === m - 1) return distance;
    for (let d of dirs) {
      nextRow = r + d[0];
      nextCol = c + d[1];
      if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
        if (!visited[nextRow][nextCol] && board[nextRow][nextCol] === '1') {
          queue.push([nextRow, nextCol, distance + 1]);
          visited[nextRow][nextCol] = true;
        }
      }
    }
  }
}

console.log(solution(n, m, board));
