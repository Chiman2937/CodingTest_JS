const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let count = 0;
  let number = 0;
  while (true) {
    if (String(number).includes('666')) {
      count++;
    }
    if (count === n) break;
    number++;
  }
  return number;
}

console.log(solution(n));
