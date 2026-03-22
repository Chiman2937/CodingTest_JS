const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

function solution(n, list) {
  list.sort((a, b) => a - b);
  return list.join('\n');
}

console.log(solution(n, list));
