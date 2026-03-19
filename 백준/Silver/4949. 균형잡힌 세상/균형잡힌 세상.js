const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

input.pop();

function solution(list) {
  let result = '';

  for (const string of list) {
    let stack = [];
    let isBalanced = true;
    for (const s of string) {
      if (s === '(') stack.push('(');
      if (s === '[') stack.push('[');
      if (s === ')') {
        if (stack[stack.length - 1] === '(') {
          stack.pop();
        } else {
          isBalanced = false;
          break;
        }
      }
      if (s === ']') {
        if (stack[stack.length - 1] === '[') {
          stack.pop();
        } else {
          isBalanced = false;
          break;
        }
      }
    }
    if (stack.length > 0) isBalanced = false;
    result += (isBalanced ? 'yes' : 'no') + '\n';
  }

  return result;
}

console.log(solution(input));
