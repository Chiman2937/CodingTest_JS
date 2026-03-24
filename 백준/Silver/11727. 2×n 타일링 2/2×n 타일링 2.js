const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let a = 1;
  let b = 1;
  for (let i = 1; i < n; i++) {
    let c = (a * 2 + b) % 10007;
    a = b;
    b = c;
  }
  return b;
}

console.log(solution(n));
