const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...positions] = input;

function solution(n, positions) {
  return positions
    .sort((a, b) => {
      const [x1, y1] = a.split(' ').map(Number);
      const [x2, y2] = b.split(' ').map(Number);
      if (x1 === x2) return y1 - y2;
      return x1 - x2;
    })
    .join('\n');
}

console.log(solution(n, positions));
