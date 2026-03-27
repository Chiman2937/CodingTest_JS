const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...table] = input;

table = table.map((v) => v.split('').map(Number));

function solution(n, table) {
  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let result = [];
  let isVisited = new Array(n).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (table[i][j] === 1 && !isVisited[i][j]) {
        let queue = [[i, j]];
        isVisited[i][j] = true;
        let count = 0;
        while (queue.length > 0) {
          count++;
          let [row, col] = queue.shift();
          for (let [dr, dc] of dirs) {
            let nextRow = row + dr;
            let nextCol = col + dc;
            if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < n) {
              if (
                table[nextRow][nextCol] === 1 &&
                !isVisited[nextRow][nextCol]
              ) {
                queue.push([nextRow, nextCol]);
                isVisited[nextRow][nextCol] = true;
              }
            }
          }
        }
        result.push(count);
      }
    }
  }

  return result.length + '\n' + result.sort((a, b) => a - b).join('\n');
}

console.log(solution(+n, table));
