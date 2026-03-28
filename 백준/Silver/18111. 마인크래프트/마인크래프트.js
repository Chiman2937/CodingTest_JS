const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [n, m, b] = num.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

function solution(n, m, b, list) {
  let min = Math.min(...list.flat());
  let remain = b;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      remain += list[row][col] - min;
    }
  }
  let divide = Math.floor(remain / (n * m));

  let result = [Infinity, 0];
  for (let i = 0; i <= divide; i++) {
    let currentTime = 0;
    let currentHeight = min + i;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < m; col++) {
        let count = currentHeight - list[row][col];
        if (count > 0) currentTime += count;
        else if (count < 0) currentTime -= 2 * count;
      }
    }
    if (currentTime <= result[0]) {
      result[0] = currentTime;
      result[1] = currentHeight;
    }
  }
  return result.join(' ');
}

console.log(solution(n, m, b, list));
