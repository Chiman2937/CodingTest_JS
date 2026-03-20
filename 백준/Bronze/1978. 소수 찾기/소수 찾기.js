const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, list] = input;
n = +n;
list = list.split(' ').map(Number);

function solution(n, list) {
  let result = 0;
  for (const item of list) {
    let isPrime = true;
    if (item === 1) isPrime = false;
    for (let i = 2; i <= Math.sqrt(item); i++) {
      if (item % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) result++;
  }

  return result;
}

console.log(solution(n, list));
