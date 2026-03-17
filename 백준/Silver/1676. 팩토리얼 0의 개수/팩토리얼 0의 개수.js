const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

function solution(n) {
  let count5 = 0;
  for (let i = 2; i <= n; i++) {
    let num = i;
    while (num % 5 === 0) {
      num = num / 5;
      count5++;
    }
  }
  console.log(count5);
}

solution(Number(input[0]));
