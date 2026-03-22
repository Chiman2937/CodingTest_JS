const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [v, ...list] = input;
let [n, k] = v.split(' ').map(Number);
list = list.map(Number);

function solution(n, k, list) {
  let result = 0;
  list.sort((a, b) => b - a);
  for (let l of list) {
    if (k === 0) break;
    result += Math.floor(k / l);
    k = k % l;
  }
  return result;
}

console.log(solution(n, k, list));
