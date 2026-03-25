const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [n, m] = num.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

function solution(n, m, list) {
  let start;

  let distanceMap = new Array(n).fill(0).map(() => new Array(m).fill(0));

  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (list[row][col] === 2) {
        start = [row, col];
      }
      distanceMap[row][col] = list[row][col] === 0 ? 0 : -1;
    }
  }

  let dirs = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let visitedMap = new Array(n).fill(0).map(() => new Array(m).fill(false));

  let queue = [[start, 0]];
  distanceMap[start[0]][start[1]] = 0;

  while (queue.length > 0) {
    let [pos, distance] = queue.shift();
    let [row, col] = pos;
    if (visitedMap[row][col]) continue;
    distanceMap[row][col] = distance;
    visitedMap[row][col] = true;
    for (let d of dirs) {
      let nextRow = row + d[0];
      let nextCol = col + d[1];
      if (nextRow >= 0 && nextRow < n && nextCol >= 0 && nextCol < m) {
        if (list[nextRow][nextCol] === 0) {
          continue;
        }
        if (visitedMap[nextRow][nextCol]) continue;
        queue.push([[nextRow, nextCol], distance + 1]);
      }
    }
  }

  return distanceMap.map((v) => v.join(' ')).join('\n');
}

console.log(solution(n, m, list));
