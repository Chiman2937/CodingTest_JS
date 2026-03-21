const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input.map(Number);

function solution(list) {
  let result = '';
  for (let n of list) {
    if (n === 0) {
      result += '1 0\n';
      continue;
    }
    let a = 0;
    let b = 1;
    for (let i = 0; i < n - 1; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    result += a + ' ' + b + '\n';
  }
  return result;
}

console.log(solution(list));
