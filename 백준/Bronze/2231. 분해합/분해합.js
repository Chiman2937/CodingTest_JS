const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

function solution(n) {
  for (let i = 1; i <= n; i++) {
    let str = String(i);
    if (i + str.split('').reduce((a, c) => a + Number(c), 0) === n) return i;
  }
  return 0;
}

console.log(solution(+input[0]));
