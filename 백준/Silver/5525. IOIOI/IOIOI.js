const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m, s] = input;

function solution(n, m, s) {
  let matcher = '';
  for (let i = 1; i <= n; i++) {
    matcher += 'IO';
  }
  matcher += 'I';

  let result = 0;

  for (let i = 0; i < m - matcher.length + 1; i++) {
    let sliced = s.substring(i, i + 2 * n + 1);
    if (sliced === matcher) result++;
  }

  return result;
}

console.log(solution(+n, +m, s));
