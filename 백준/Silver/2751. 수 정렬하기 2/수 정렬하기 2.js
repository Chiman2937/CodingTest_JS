const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...numbers] = input;

function solution(n, numbers) {
  return numbers.sort((a, b) => a - b).join('\n');
}

console.log(solution(n, numbers));
