const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [q, numbers, ...list] = input;
let [n, m] = q.split(' ').map(Number);
numbers = numbers.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

function solution(n, m, numbers, list) {
  numbers.unshift(0);
  let result = '';
  let sum = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    sum[i] = sum[i - 1] + numbers[i];
  }
  for (const s of list) {
    result += sum[s[1]] - sum[s[0] - 1] + '\n';
  }
  return result;
}

console.log(solution(n, m, numbers, list));
