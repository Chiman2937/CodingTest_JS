const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let list = new Array(n).fill(0).map((v, i) => i + 1);
  for (let i = 1; i < list.length; i += 2) {
    list.push(list[i]);
  }
  return list[list.length - 1];
}

console.log(solution(n));
