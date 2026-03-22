const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  let stack = [];
  let result = '';
  for (let l of list) {
    let [command, value] = l.split(' ');
    switch (command) {
      case 'push':
        stack.push(+value);
        break;
      case 'pop':
        if (stack.length === 0) result += '-1\n';
        else {
          const v = stack.pop();
          result += v + '\n';
        }
        break;
      case 'size':
        result += stack.length + '\n';
        break;
      case 'empty':
        result += stack.length === 0 ? '1\n' : '0\n';
        break;
      case 'top':
        result += stack.length === 0 ? '-1\n' : stack[stack.length - 1] + '\n';
        break;
    }
  }
  return result;
}

console.log(solution(+n, list));
