const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, list] = input;
let [n, m] = num.split(' ').map(Number);
list = list.split(' ').map(Number);

function solution(n, m, list) {
  let result = 0;
  let left = 0;
  let right = Math.max(...list);
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let countWoods = list.reduce((a, c) => a + Math.max(c - mid, 0), 0);
    if (countWoods >= m) {
      left = mid + 1;
      result = Math.max(result, mid);
    } else right = mid - 1;
  }
  return result;
}

console.log(solution(n, m, list));
