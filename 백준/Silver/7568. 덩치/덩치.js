const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  let result = [];
  list = list.map((v) => v.split(' ').map(Number));
  for (let i = 0; i < n; i++) {
    let rank = 0;
    for (let j = 0; j < n; j++) {
      if (list[i][0] < list[j][0] && list[i][1] < list[j][1]) rank++;
    }
    result.push(rank + 1);
  }
  return result.join(' ');
}

console.log(solution(n, list));
