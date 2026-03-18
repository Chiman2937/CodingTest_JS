const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, k] = input[0].split(' ').map(Number);

function solution(n, k) {
  let array = new Array(n)
    .fill(0)
    .map((v, i) => ({ value: i + 1, visited: false }));
  let result = [];

  let remain = n;
  let count = 1;
  let i = 0;
  while (remain > 0) {
    if (!array[i].visited && count !== k) {
      count++;
    } else if (!array[i].visited && count === k) {
      array[i].visited = true;
      count = 1;
      result.push(array[i].value);
      remain--;
    } else if (array[i].visited) {
    }
    i = (i + 1) % n;
  }

  return '<' + result.join(', ') + '>';
}

console.log(solution(n, k));
