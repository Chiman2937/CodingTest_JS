const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, members_n, m, members_m] = input;

function solution(n, members_n, m, members_m) {
  members_n = members_n
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  members_m = members_m.split(' ').map(Number);
  let result = '';

  for (const number of members_m) {
    let left = 0;
    let right = n;
    while (left < right) {
      let mid = ~~((left + right) / 2);
      if (number < members_n[mid]) right = mid;
      else if (number > members_n[mid]) left = mid + 1;
      else if (number === members_n[mid]) {
        result += '1\n';
        break;
      }
    }
    if (left >= right) result += '0\n';
  }

  return result;
}

console.log(solution(Number(n), members_n, Number(m), members_m));
