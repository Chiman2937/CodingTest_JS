const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

function solution(n, list) {
  if (list.length === 0) return 0;
  list = list.sort((a, b) => a - b);
  let cut = Math.round(n * 0.15);
  list = list.slice(cut, n - cut);
  return Math.round(list.reduce((a, c) => a + c, 0) / (n - cut * 2));
}

console.log(solution(n, list));
