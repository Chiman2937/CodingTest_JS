const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...box] = input;
let [m, n] = num.split(' ').map(Number);
box = box.map((v) => v.split(' ').map(Number));

function solution(m, n, box) {
  let isVisited = new Array(n).fill(0).map(() => new Array(m).fill(false));
  let queue = [];
  let count = [0, 0];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (box[r][c] === 0) {
        count[0]++;
      } else if (box[r][c] === 1) {
        count[1]++;
        queue.push([r, c, 0]);
        isVisited[r][c] = true;
      } else if (box[r][c] === -1) {
        isVisited[r][c] = true;
      }
    }
  }

  if (count[0] === 0) return 0;
  if (count[1] === 0) return -1;

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  let result = 0;
  let head = 0;
  while (queue.length > head) {
    let [row, col, distance] = queue[head++];
    result = Math.max(distance, result);
    for (let [dr, dc] of dirs) {
      const nextRow = row + dr;
      const nextCol = col + dc;
      if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
        if (box[nextRow][nextCol] !== -1 && !isVisited[nextRow][nextCol]) {
          count[0]--;
          queue.push([nextRow, nextCol, distance + 1]);
          isVisited[nextRow][nextCol] = true;
        }
      }
    }
  }

  return count[0] > 0 ? -1 : result;
}

console.log(solution(m, n, box));
