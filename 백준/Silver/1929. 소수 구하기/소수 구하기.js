const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(' ').map(Number);

function solution(n, m) {
  let array = new Array(m - n + 1).fill(0).map((v, i) => i + n);
  let isPrime = new Array(m - n + 1).fill(true);
  let result = '';

  for (let i = 0; i < array.length; i++) {
    if (array[i] === 1) isPrime[i] = false;
    for (let j = 2; j <= Math.sqrt(array[i]); j++) {
      if (!isPrime[i]) break;
      if (array[i] % j === 0) {
        isPrime[i] = false;
        break;
      }
    }
    if (isPrime[i]) result += array[i] + '\n';
  }

  return result;
}

console.log(solution(n, m));
