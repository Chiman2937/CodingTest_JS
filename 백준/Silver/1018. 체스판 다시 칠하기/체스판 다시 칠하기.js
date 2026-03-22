const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [v, ...list] = input;
let [n, m] = v.split(' ').map(Number);

function solution(n, m, list) {
  let result = Infinity;
  const start_white = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];
  const start_black = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];

  for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
      let count_w = 0;
      let count_b = 0;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (list[r + i][c + j] !== start_white[r][c]) count_w++;
          if (list[r + i][c + j] !== start_black[r][c]) count_b++;
        }
      }
      result = Math.min(count_w, count_b, result);
    }
  }
  return result;
}

console.log(solution(n, m, list));
