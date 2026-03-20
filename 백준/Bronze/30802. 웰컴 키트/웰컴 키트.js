const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let n = +input[0];
let list = input[1].split(' ').map(Number);
let [t, p] = input[2].split(' ').map(Number);

function solution(n, list, t, p) {
  let result = '';

  let sum_t = list.reduce((a, c) => a + Math.ceil(c / t), 0);
  let sum_p = Math.floor(n / p);
  let remain_p = n % p;

  result += sum_t + '\n';
  result += sum_p + ' ' + remain_p + '\n';

  return result;
}

console.log(solution(n, list, t, p));
