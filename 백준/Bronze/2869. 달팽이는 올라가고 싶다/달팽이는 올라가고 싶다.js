const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [a, b, v] = input[0].split(' ').map(Number);

function solution(a, b, v) {
  return Math.ceil((v - a) / (a - b)) + 1;
}

console.log(solution(a, b, v));
