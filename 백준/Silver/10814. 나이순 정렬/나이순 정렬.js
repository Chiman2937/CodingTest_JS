const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...members] = input;

function solution(n, members) {
  members = members
    .map((v, i) => ({ v, i }))
    .sort((a, b) => {
      const ageA = Number(a.v.split(' ')[0]);
      const ageB = Number(b.v.split(' ')[0]);
      if (ageA !== ageB) return ageA - ageB;
      else return a.i - b.i;
    });
  return members.map((v) => v.v).join('\n');
}

console.log(solution(n, members));
