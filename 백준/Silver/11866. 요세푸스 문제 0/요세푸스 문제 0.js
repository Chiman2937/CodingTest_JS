const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
  let result = [];

  let array = new Int32Array(n + 1);
  for (let i = 1; i <= n; i++) {
    array[i] = (i % n) + 1;
  }

  let remain = n;
  let cur = n;
  while (remain > 0) {
    for (let i = 0; i < k - 1; i++) {
      cur = array[cur];
    }

    const removed = array[cur];
    array[cur] = array[removed];
    result.push(removed);
    remain--;
  }

  return '<' + result.join(', ') + '>';
}

console.log(solution(n, k));
