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
    result += fn(0, n) + '\n';
  }
  function fn(sum, n) {
    if (sum === n) return 1;
    if (sum > n) return 0;
    return fn(sum + 1, n) + fn(sum + 2, n) + fn(sum + 3, n);
  }
  return result;
}

console.log(solution(list));
