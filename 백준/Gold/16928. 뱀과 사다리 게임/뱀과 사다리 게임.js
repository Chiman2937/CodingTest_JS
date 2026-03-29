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
  let boardMap = new Map();
  for (let [s, f] of board) {
    boardMap.set(s, f);
  }

  let queue = [[1, 0]];
  let visitors = new Set();
  visitors.add(1);
  while (queue.length) {
    let [key, distance] = queue.shift();
    if (key === 100) return distance;
    for (let i = 1; i <= 6; i++) {
      if (key + i <= 100 && !visitors.has(key + i)) {
        let path = boardMap.get(key + i);
        if (path) {
          queue.push([path, distance + 1]);
          visitors.add(path);
        } else {
          queue.push([key + i, distance + 1]);
          visitors.add(key + i);
        }
      }
    }
  }
}

console.log(solution(n, m, board));
