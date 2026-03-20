const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [count, ...cases] = input;

function solution(count, cases) {
  count = +count;
  let result = '';
  for (let i = 0; i < cases.length; i += 2) {
    let [n, m] = cases[i].split(' ').map(Number);
    let list = cases[i + 1]
      .split(' ')
      .map(Number)
      .map((v, i) => ({ value: v, index: i }));
    if (list.length === 1) {
      result += '1\n';
      continue;
    }
    let count = 0;
    while (true) {
      const cur = list.shift();
      if (list.some((v) => cur.value < v.value)) {
        list.push(cur);
      } else {
        count++;
        if (cur.index === m) {
          result += count + '\n';
          break;
        }
      }
    }
  }

  return result;
}

console.log(solution(count, cases));
