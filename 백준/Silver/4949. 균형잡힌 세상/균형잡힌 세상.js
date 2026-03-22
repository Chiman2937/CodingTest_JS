const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

input.pop();

function solution(list) {
  let result = '';
  for (let l of list) {
    let stack = [];
    let isBalance = true;
    for (let i = 0; i < l.length; i++) {
      if (l[i] === '(' || l[i] === '[') stack.push(l[i]);
      else if (l[i] === ')') {
        if (stack[stack.length - 1] !== '(') {
          isBalance = false;
          break;
        }
        stack.pop();
      } else if (l[i] === ']') {
        if (stack[stack.length - 1] !== '[') {
          isBalance = false;
          break;
        }
        stack.pop();
      }
    }
    if (stack.length !== 0) isBalance = false;
    result += isBalance ? 'yes\n' : 'no\n';
  }
  return result;
}

console.log(solution(input));
