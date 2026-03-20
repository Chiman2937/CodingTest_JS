const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, k] = input[0].split(' ').map(Number);

function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1);
}

function solution(n, k) {
  return fact(n) / (fact(k) * fact(n - k));
}

console.log(solution(n, k));
