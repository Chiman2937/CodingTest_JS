const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;
list = list.map((v) => v.split(' ').map(Number));

function solution(n, list) {
  let result = 0;
  for (let r = 0; r < n; r++) {
    let w = list[r].length - 1;
    for (let c = 0; c <= w; c++) {
      let sum1 = 0;
      let sum2 = 0;
      if (c > 0) sum1 = list[r - 1][c - 1];
      if (c <= w - 1) sum2 = list[r - 1][c];
      list[r][c] += Math.max(sum1, sum2);
      if (r === n - 1) result = Math.max(result, list[r][c]);
    }
  }
  return result;
}

console.log(solution(n, list));
