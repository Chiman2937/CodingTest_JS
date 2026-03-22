const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];

function solution(n) {
  let list = new Array(n + 1)
    .fill(0)
    .map((v, i) => (i === 0 ? 0 : (i % n) + 1));

  let remain = n;
  let cur = n;
  while (remain > 1) {
    let toDiscard = list[cur];
    let toMove = list[toDiscard];
    list[cur] = toMove;
    cur = toMove;
    remain--;
  }
  return list[cur];
}

console.log(solution(n));
