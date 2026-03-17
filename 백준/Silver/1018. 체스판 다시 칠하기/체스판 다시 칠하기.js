const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [size, ...arr] = input;
let [row, col] = size.split(' ');

function solution(row, col, arr) {
  const whiteFirst = [
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
  ];

  const blackFirst = [
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
  ];

  let answer = Infinity;

  for (let i = 0; i <= row - 8; i++) {
    for (let j = 0; j <= col - 8; j++) {
      let countW = 0;
      let countB = 0;
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (arr[i + r][j + c] !== whiteFirst[r][c]) countW++;
          if (arr[i + r][j + c] !== blackFirst[r][c]) countB++;
        }
      }
      answer = Math.min(answer, Math.min(countW, countB));
    }
  }
  return answer;
}

console.log(solution(row, col, arr));
