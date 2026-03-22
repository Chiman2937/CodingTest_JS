const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let result = 0;
  for (let i = 2; i <= n; i++) {
    let num = i;
    while (num % 5 === 0) {
      num = num / 5;
      result++;
    }
  }
  return result;
}

console.log(solution(n));
