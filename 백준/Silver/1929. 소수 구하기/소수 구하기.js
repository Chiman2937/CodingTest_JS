const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(' ').map(Number);

function solution(n, m) {
  let arrayLength = m - n + 1;
  let array = new Array(arrayLength).fill(0).map((v, i) => i + n);
  let isPrime = new Array(arrayLength).fill(true);
  let result = '';

  if (array[0] === 1) isPrime[0] = false;
  for (let i = 2; i <= Math.sqrt(m); i++) {
    for (let j = i * 2 - n; j < arrayLength; j += i) {
      isPrime[j] = false;
    }
  }
  for (let i = 0; i < arrayLength; i++) {
    if (isPrime[i]) result += array[i] + '\n';
  }
  return result;
}

console.log(solution(n, m));
