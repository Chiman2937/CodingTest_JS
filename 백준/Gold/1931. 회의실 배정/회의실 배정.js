const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...meetings] = input;
meetings = meetings.map((v) => v.split(' ').map(Number));

function solution(n, meetings) {
  meetings.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  let result = 0;
  let currentTime = 0;
  for (const [s, f] of meetings) {
    if (currentTime <= s) {
      currentTime = f;
      result++;
    }
  }
  return result;
}

console.log(solution(+n, meetings));
