const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [_, ...cases] = input;

function solution(cases) {
  let result = '';
  for (c = 0; c < cases.length - 1; c += 2) {
    let k = Number(cases[c]);
    let n = Number(cases[c + 1]);

    let array = new Array(n).fill(0).map((v, i) => i + 1);

    for (let i = 1; i <= k; i++) {
      for (let j = 1; j < n; j++) {
        array[j] = array[j] + array[j - 1];
      }
    }
    result += array[n - 1] + '\n';
  }
  return result;
}

console.log(solution(cases));
