const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
  let MAX = 100000;
  let visitors = new Array(n).fill(false);
  visitors[n] = true;
  let queue = [[n, 0]];
  let head = 0;
  while (queue.length > 0) {
    let [key, distance] = queue[head++];
    if (key === k) return distance;
    const nexts = [key - 1, key + 1, key * 2];
    for (const n of nexts) {
      if (!visitors[n] && n <= MAX && n >= 0) {
        queue.push([n, distance + 1]);
        visitors[n] = true;
      }
    }
  }
}

console.log(solution(n, k));
