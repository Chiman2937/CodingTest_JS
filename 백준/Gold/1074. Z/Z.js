const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, r, c] = input[0].split(' ').map(Number);

function solution(n, r, c) {
  if (n === 0) return 0;
  let half = 2 ** (n - 1);
  let halfSquareSize = half * half;

  if (r < half && c < half) return solution(n - 1, r, c);
  else if (r < half && c >= half)
    return halfSquareSize + solution(n - 1, r, c - half);
  else if (r >= half && c < half)
    return halfSquareSize * 2 + solution(n - 1, r - half, c);
  return halfSquareSize * 3 + solution(n - 1, r - half, c - half);
}

console.log(solution(n, r, c));
