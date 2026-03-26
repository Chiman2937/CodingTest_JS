const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...board] = input;

n = +n;
board = board.map((v) => v.split(' ').map(Number));

function solution(n, board) {
  let result = [0, 0];

  function rec(board) {
    if (board.flat().every((v) => v === 0)) {
      result[0]++;
      return;
    }
    if (board.flat().every((v) => v === 1)) {
      result[1]++;
      return;
    }
    const n = board.length;
    let dirs = [
      [0, 0],
      [0, n / 2],
      [n / 2, 0],
      [n / 2, n / 2],
    ];
    for (let d of dirs) {
      let next = new Array(n / 2).fill(0).map(() => new Array(n / 2));
      for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
          next[i][j] = board[i + d[0]][j + d[1]];
        }
      }
      rec(next);
    }
  }
  rec(board);
  return result.join('\n');
}

console.log(solution(n, board));
