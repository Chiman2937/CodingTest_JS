const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...numbers] = input.map(Number);

function solution() {
  numbers = numbers.sort((a, b) => a - b);
  let result = '';
  result += average(n, numbers) + '\n';
  result += median(n, numbers) + '\n';
  result += mode(n, numbers) + '\n';
  result += range(n, numbers);

  return result;
}

function average(n, numbers) {
  return Math.round(numbers.reduce((a, c) => a + c, 0) / n);
}

function median(n, numbers) {
  return numbers[~~(n / 2)];
}

function mode(n, numbers) {
  if (numbers.length === 1) return numbers[0];
  let map = new Map();
  for (const num of numbers) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  const result = [...map].sort((a, b) => b[1] - a[1]);
  if (result[0][1] === result[1][1]) return result[1][0];
  return result[0][0];
}

function range(n, numbers) {
  return numbers[n - 1] - numbers[0];
}

console.log(solution(n, numbers));
