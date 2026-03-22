const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);
list = list.map(Number);
function solution(n, list) {
  let result = '';
  let stack = [];
  let cur = 1;
  for (let l of list) {
    while (cur <= l) {
      stack.push(cur);
      cur++;
      result += '+\n';
    }
    if (stack[stack.length - 1] === l) {
      stack.pop();
      result += '-\n';
    } else {
      return 'NO';
    }
  }
  return result;
}

console.log(solution(n, list));
