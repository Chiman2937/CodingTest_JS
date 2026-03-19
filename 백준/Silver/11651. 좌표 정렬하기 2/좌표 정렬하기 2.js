const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...positions] = input;

n = Number(n);
positions = positions.map((v) => v.split(' ').map(Number));

function solution(n, positions) {
  return positions
    .sort((a, b) => {
      if (a[1] !== b[1]) return a[1] - b[1];
      return a[0] - b[0];
    })
    .map((v) => v.join(' '))
    .join('\n');
}

console.log(solution(n, positions));
