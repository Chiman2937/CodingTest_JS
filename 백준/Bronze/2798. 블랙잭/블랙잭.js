const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(' ').map(Number);
let list = input[1].split(' ').map(Number);

function solution(n, m, list) {
  let result = 0;

  function perm(index, count, sum) {
    if (count === 3) {
      if (sum <= m && sum > result) {
        result = sum;
      }
      return;
    }
    for (let i = index + 1; i < n; i++) {
      perm(i, count + 1, sum + list[i]);
    }
  }
  perm(-1, 0, 0);
  return result;
}

console.log(solution(n, m, list));
