const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

function solution(input) {
  let num = 0;
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    if (!!Number(input[i])) {
      num = Number(input[i]);
      index = i;
      break;
    }
  }

  let n = input.length - index + num;

  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0 && n % 5 !== 0) return 'Fizz';
  if (n % 3 !== 0 && n % 5 === 0) return 'Buzz';
  return n;
}

console.log(solution(input));
