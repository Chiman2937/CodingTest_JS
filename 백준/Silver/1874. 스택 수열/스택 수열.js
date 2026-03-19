const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...numbers] = input.map(Number);

n = +n;
numbers = numbers.map(Number);

function solution(n, numbers) {
  let cur = 1;
  let stack = [];
  let result = '';
  for (const target of numbers) {
    while (target >= cur) {
      stack.push(cur++);
      result += '+\n';
    }
    if (stack[stack.length - 1] === target) {
      stack.pop();
      result += '-\n';
    } else {
      return 'NO';
    }
  }
  return result;
}

console.log(solution(n, numbers));
