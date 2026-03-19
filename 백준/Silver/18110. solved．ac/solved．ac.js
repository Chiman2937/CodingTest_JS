const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...numbers] = input;
n = Number(n);
numbers = numbers.map(Number);

function solution(n, numbers) {
  if (n === 0) return 0;

  numbers = numbers.sort((a, b) => a - b);
  let cut = Math.round(n * 0.15);

  numbers = numbers.slice(cut, n - cut);

  return Math.round(numbers.reduce((a, c) => a + c, 0) / numbers.length);
}

console.log(solution(n, numbers));
