const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [m, n, h] = num.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

let box = new Array(h).fill(0).map(() => []);

for (let i = 0; i < n * h; i++) {
  box[Math.floor(i / n)].push(list[i]);
}

function solution(m, n, h, box) {
  let count = [0, 0];
  let queue = [];
  let isVisited = new Array(h)
    .fill(0)
    .map(() => new Array(n).fill(0).map(() => new Array(m).fill(false)));
  for (let height = 0; height < h; height++) {
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < m; col++) {
        if (box[height][row][col] === 0) count[0]++;
        if (box[height][row][col] === 1) {
          count[1]++;
          queue.push([height, row, col, 0]);
          isVisited[height][row][col] = true;
        }
      }
    }
  }
  // [height,row,col]
  let dirs = [
    [0, 1, 0],
    [0, 0, 1],
    [0, -1, 0],
    [0, 0, -1],
    [1, 0, 0],
    [-1, 0, 0],
  ];

  let result = 0;
  let head = 0;
  while (queue.length > head) {
    let [height, row, col, distance] = queue[head++];
    result = distance;
    for (let [dh, dr, dc] of dirs) {
      let nextHeight = height + dh;
      let nextRow = row + dr;
      let nextCol = col + dc;
      if (
        nextHeight >= 0 &&
        nextHeight < h &&
        nextRow >= 0 &&
        nextRow < n &&
        nextCol >= 0 &&
        nextCol < m
      ) {
        if (
          !isVisited[nextHeight][nextRow][nextCol] &&
          box[nextHeight][nextRow][nextCol] === 0
        ) {
          isVisited[nextHeight][nextRow][nextCol] = true;
          queue.push([nextHeight, nextRow, nextCol, distance + 1]);
          count[0]--;
        }
      }
    }
  }
  return count[0] > 0 ? -1 : result;
}

console.log(solution(m, n, h, box));
