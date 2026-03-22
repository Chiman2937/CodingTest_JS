const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
  let list = new Array(n + 1)
    .fill(0)
    .map((v, i) => (i === 0 ? 0 : (i % n) + 1));
  let result = [];
  let remain = n;
  let cur = n;
  while (remain > 0) {
    for (let i = 0; i < k - 1; i++) {
      cur = list[cur];
    }
    let discard = list[cur];
    list[cur] = list[discard];
    result.push(discard);
    remain--;
  }
  return '<' + result.join(', ') + '>';
}

console.log(solution(n, k));
