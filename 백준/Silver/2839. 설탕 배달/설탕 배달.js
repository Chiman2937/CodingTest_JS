const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const n = Number(input[0]);

function solution(n) {
  let result = 0;
  while (n % 5 > 0) {
    n = n - 3;
    result++;
    if (n < 0) return -1;
  }
  result += n / 5;
  return result;
}

console.log(solution(n));
