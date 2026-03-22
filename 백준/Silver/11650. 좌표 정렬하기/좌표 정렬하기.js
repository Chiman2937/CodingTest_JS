const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  list = list.sort((a, b) => {
    let [ax, ay] = a.split(' ').map(Number);
    let [bx, by] = b.split(' ').map(Number);
    if (ax !== bx) return ax - bx;
    return ay - by;
  });
  return list.join('\n');
}

console.log(solution(n, list));
