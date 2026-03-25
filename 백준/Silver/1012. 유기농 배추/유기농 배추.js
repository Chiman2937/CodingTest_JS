const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [t, ...list] = input;

let testCases = [];
let i = -1;

for (let l of list) {
  if (l.split(' ').length === 3) {
    let [n, m, k] = l.split(' ').map(Number);
    i++;
    testCases.push([n, m, k]);
  } else {
    testCases[i].push(l.split(' ').map(Number));
  }
}

function solution(testCases) {
  let result = '';
  for (let t of testCases) {
    let [n, m, k, ...positions] = t;
    let table = new Array(m).fill(0).map(() => new Array(n).fill(0));
    for (let p of positions) {
      table[p[1]][p[0]] = 1;
    }
    result += getAreaCount(n, m, table) + '\n';
  }
  return result;
}

function getAreaCount(n, m, table) {
  let count = 0;
  let dirs = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ];
  let isVisited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      if (table[row][col] !== 1) continue;
      if (!isVisited[row][col]) count++;
      let queue = [[row, col]];
      while (queue.length > 0) {
        let key = queue.shift();
        if (isVisited[key[0]][key[1]]) continue;
        isVisited[key[0]][key[1]] = true;
        for (let d of dirs) {
          const nextRow = key[0] + d[0];
          const nextCol = key[1] + d[1];
          if (nextRow >= 0 && nextRow < m && nextCol >= 0 && nextCol < n) {
            if (isVisited[nextRow][nextCol]) continue;
            if (table[nextRow][nextCol] === 1) {
              queue.push([nextRow, nextCol]);
            }
          }
        }
      }
    }
  }
  return count;
}

console.log(solution(testCases));
