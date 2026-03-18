const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const n = Number(input[0]);

function solution(n) {
  let queue = new Array(n).fill(0).map((_, i) => i + 1);

  let head = 0;

  while (head < queue.length - 1) {
    head++;
    const next = queue[head];
    head++;
    queue.push(next);
  }

  return queue[head];
}

console.log(solution(n));
