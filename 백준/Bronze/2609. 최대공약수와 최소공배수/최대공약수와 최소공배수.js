const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, m] = input[0].split(' ').map(Number);

function solution(n, m) {
  let a = Math.max(m, n);
  let b = Math.min(m, n);

  while (a % b !== 0) {
    let c = a % b;
    a = b;
    b = c;
  }

  return b + '\n' + (m * n) / b;
}

console.log(solution(n, m));
