const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

function solution(n) {
  let sum = 1;
  let i = 1;
  while (sum < n) {
    sum += 6 * i;
    i++;
  }
  return i;
}

console.log(solution(+input[0]));
