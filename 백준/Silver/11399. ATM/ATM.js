const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, list] = input;
n = +n;
list = list.split(' ').map(Number);

function solution(n, list) {
  list.sort((a, b) => a - b);
  for (let i = 1; i < list.length; i++) {
    list[i] = list[i - 1] + list[i];
  }
  return list.reduce((a, c) => a + c, 0);
}

console.log(solution(n, list));
