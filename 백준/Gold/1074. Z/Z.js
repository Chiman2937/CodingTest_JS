const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, r, c] = input[0].split(' ').map(Number);

function solution(n, r, c) {
  let size = 2 ** n;

  function recursion(size, cr, cc, distance) {
    if (size === 1 && cr === r && cc === c) {
      return distance;
    }
    let half = size / 2;
    let nr = cr + half > r ? cr : cr + half;
    let nc = cc + half > c ? cc : cc + half;
    let nDistance =
      distance +
      (cr + half > r ? 0 : half ** 2 * 2) +
      (cc + half > c ? 0 : half ** 2);
    return recursion(half, nr, nc, nDistance);
  }
  return recursion(size, 0, 0, 0);
}

console.log(solution(n, r, c));
