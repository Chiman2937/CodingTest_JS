const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  let queue = [];
  let result = '';
  for (let i = 0; i < n; i++) {
    const [command, value] = list[i].split(' ');
    switch (command) {
      case 'push':
        queue.push(value);
        break;
      case 'pop':
        if (queue.length === 0) {
          result += '-1\n';
        } else {
          result += queue.shift() + '\n';
        }
        break;
      case 'size':
        result += queue.length + '\n';
        break;
      case 'empty':
        result += queue.length === 0 ? '1\n' : '0\n';
        break;
      case 'front':
        result += queue.length === 0 ? '-1\n' : queue[0] + '\n';
        break;
      case 'back':
        result += queue.length === 0 ? '-1\n' : queue[queue.length - 1] + '\n';
        break;
    }
  }
  return result;
}

console.log(solution(n, list));
