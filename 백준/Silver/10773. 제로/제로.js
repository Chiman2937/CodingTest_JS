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
  let stack = [];
  for (const num of numbers) {
    if (num !== 0) stack.push(num);
    else stack.pop();
  }
  return stack.reduce((a, c) => a + c, 0);
}

console.log(solution(n, numbers));
