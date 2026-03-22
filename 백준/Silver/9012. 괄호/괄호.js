const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(list) {
  let result = '';
  for (let l of list) {
    let isBalance = true;
    let stack = 0;
    for (let i = 0; i < l.length; i++) {
      if (l[i] === '(') stack++;
      else {
        if (stack === 0) {
          isBalance = false;
          break;
        }
        stack--;
      }
    }
    if (stack !== 0) isBalance = false;
    result += isBalance ? 'YES\n' : 'NO\n';
  }
  return result;
}

console.log(solution(list));
