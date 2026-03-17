const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

input.pop();

const numbers = input.map((v) => v.split(' ').sort((a, b) => a - b));

function solution(numbers) {
  let answer = '';
  for (const n of numbers) {
    if (n[0] ** 2 + n[1] ** 2 === n[2] ** 2) {
      answer += 'right\n';
    } else {
      answer += 'wrong\n';
    }
  }
  return answer;
}

console.log(solution(numbers));
