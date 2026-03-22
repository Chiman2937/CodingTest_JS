const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

function solution(n, list) {
  let stack = [];
  for (let l of list) {
    if (l !== 0) stack.push(l);
    else stack.pop();
  }
  return stack.reduce((a, c) => a + c, 0);
}

console.log(solution(n, list));
