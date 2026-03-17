const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, scores] = input;
n = Number(n);
scores = scores.split(' ').map(Number);

function solution(n, scores) {
  const m = Math.max(...scores);
  scores = scores.map((v) => Math.min((v / m) * 100, 100));
  console.log(scores.reduce((a, c) => a + c, 0) / n);
}

solution(n, scores);
