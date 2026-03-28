const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);
let [num, ...list] = input;
let [k, n] = num.split(' ').map(Number);
list = list.map(Number);

function solution(k, n, list) {
  let maxValue = Math.max(...list);
  let left = 1;
  let right = maxValue;

  let result = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (countCables(mid, list) >= n) {
      result = Math.max(result, mid);
      left = mid + 1;
    } else right = mid - 1;
  }

  return result;
}

function countCables(len, list) {
  return list.reduce((a, c) => a + Math.floor(c / len), 0);
}

console.log(solution(k, n, list));
