const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, m] = input[0].split(' ').map(Number);

function solution(n, m) {
  if (n === 1) n++;
  let isPrime = new Array(m - n + 1).fill(true);
  let result = '';
  for (let i = 2; i <= Math.sqrt(m); i++) {
    let start = Math.max(i * i, Math.ceil(n / i) * i);
    for (let j = start - n; j <= m - n; j += i) {
      isPrime[j] = false;
    }
  }
  for (let i = 0; i < isPrime.length; i++) {
    if (isPrime[i]) result += n + i + '\n';
  }
  return result;
}

console.log(solution(n, m));
