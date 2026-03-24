const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

function solution(list) {
  let result = '';
  for (const n of list) {
    let a = 1;
    let b = 1;
    let c = 1;
    for (let i = 3; i < n; i++) {
      let sum = a + b;
      a = b;
      b = c;
      c = sum;
    }
    result += c + '\n';
  }
  return result;
}

console.log(solution(list));
