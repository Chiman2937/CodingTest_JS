const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let result = 0;
  while (n % 5 !== 0) {
    if (n < 0) return -1;
    n -= 3;
    result++;
  }
  return result + n / 5;
}

console.log(solution(n));
