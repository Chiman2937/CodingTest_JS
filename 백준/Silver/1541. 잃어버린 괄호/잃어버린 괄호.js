const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let str = input[0];

function solution(str) {
  let list = str.split('-');
  let result = 0;
  let start = list
    .shift()
    .split('+')
    .reduce((a, c) => +a + +c, 0);

  result += start;

  for (let q of list) {
    let calc = q.split('+').reduce((a, c) => +a + +c, 0);
    result -= calc;
  }

  return result;
}

console.log(solution(str));
