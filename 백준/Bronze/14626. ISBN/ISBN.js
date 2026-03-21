const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

function solution(n) {
  let sum = 0;
  let problem_weight = 1;
  for (let i = 0; i < n.length - 1; i++) {
    let weight = i % 2 === 0 ? 1 : 3;
    if (n[i] === '*') {
      problem_weight = weight;
    } else {
      sum += +n[i] * weight;
    }
  }
  let m = +n[n.length - 1];
  sum += m;
  for (let i = 0; i <= 9; i++) {
    if ((sum + i * problem_weight) % 10 === 0) return i;
  }
}

console.log(solution(input[0]));
