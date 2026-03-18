const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  let result = '';
  for (let i = 0; i < n; i++) {
    let count = 0;
    for (const str of list[i]) {
      if (str === '(') count++;
      else if (str === ')') count--;
      if (count < 0) break;
    }
    if (count === 0) {
      result += 'YES\n';
    } else {
      result += 'NO\n';
    }
  }
  return result;
}

console.log(solution(n, list));
