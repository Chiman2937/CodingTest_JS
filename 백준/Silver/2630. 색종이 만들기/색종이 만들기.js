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
  function rec(r, c, size) {
    const first = board[r][c];
    let isUniform = true;
    outer: for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (first !== board[i][j]) {
          isUniform = false;
          break outer;
        }
      }
    }
    if (isUniform) return [first === 0 ? 1 : 0, first === 1 ? 1 : 0];

    const half = size / 2;

    const sub = [
      rec(r, c, half),
      rec(r + half, c, half),
      rec(r, c + half, half),
      rec(r + half, c + half, half),
    ];
    return sub.reduce(([w, b], [cw, cb]) => [w + cw, b + cb]);
  }
  const [white, blue] = rec(0, 0, n);
  return white + '\n' + blue;
}

console.log(solution(n, board));
