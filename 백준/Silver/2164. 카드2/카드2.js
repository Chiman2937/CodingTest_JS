const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const n = Number(input[0]);

function solution(n) {
  let array = new Int32Array(n + 1);

  for (let i = 1; i <= n; i++) {
    array[i] = (i % n) + 1;
  }

  let remain = n; // 남은 카드 갯수
  let cur = n; // 버릴카드를 가리키는 카드가 되어야함

  while (remain > 1) {
    let toDiscard = array[cur];
    let toMove = array[toDiscard];
    array[cur] = toMove;
    cur = toMove;
    remain--;
  }
  return array[cur];
}

console.log(solution(n));
