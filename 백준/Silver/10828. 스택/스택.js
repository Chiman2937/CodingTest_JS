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
  for (let item of list) {
    let [command, value] = item.split(' ');
    switch (command) {
      case 'push':
        stack.push(+value);
        break;
      case 'pop':
        result += stack.length === 0 ? '-1\n' : stack.pop() + '\n';
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
