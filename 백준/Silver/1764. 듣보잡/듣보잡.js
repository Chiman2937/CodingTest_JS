const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [numbers, ...list] = input;
let [n, m] = numbers.split(' ').map(Number);

function solution(list) {
  let unListen = list.slice(0, n);
  let unSee = list.slice(n);
  let map = new Map();
  let result = [];
  let count = 0;
  for (let l of unListen) {
    map.set(l, 1);
  }
  for (let l of unSee) {
    if (map.get(l)) {
      count++;
      result.push(l);
    }
  }
  result.sort();
  return count + '\n' + result.join('\n');
}

console.log(solution(list));
