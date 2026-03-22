const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let array = new Array(n + 1).fill(Infinity);
  array[0] = 0;
  array[1] = 0;
  for (let i = 1; i <= n; i++) {
    if (i + 1 <= n) array[i + 1] = Math.min(array[i + 1], array[i] + 1);
    if (i * 2 <= n) array[i * 2] = Math.min(array[i * 2], array[i] + 1);
    if (i * 3 <= n) array[i * 3] = Math.min(array[i * 3], array[i] + 1);
  }
  return array[n];
}

console.log(solution(n));
