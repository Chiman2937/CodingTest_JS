const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m, s] = input;

function solution(n, m, s) {
  let matcher = 'IOI';
  let matchedList = new Array(m).fill(0);
  for (let i = 0; i <= m - 3; i++) {
    if (s.substring(i, i + 3) === matcher) {
      if (i < 2) matchedList[i] = 1;
      else matchedList[i] = matchedList[i - 2] + 1;
    }
  }
  return matchedList.filter((v) => v >= n).length;
}

console.log(solution(+n, +m, s));
