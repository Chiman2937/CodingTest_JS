const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(n, list) {
  list = list.map((v, i) => ({
    value: v,
    index: i,
  }));
  list.sort((a, b) => {
    let ageA = +a.value.split(' ')[0];
    let ageB = +b.value.split(' ')[0];
    if (ageA !== ageB) return ageA - ageB;
    return a.index - b.index;
  });
  list = list.map((v) => v.value);
  return list.join('\n');
}

console.log(solution(+n, list));
