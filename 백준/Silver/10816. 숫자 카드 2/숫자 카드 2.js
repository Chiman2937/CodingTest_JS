const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, list, m, find] = input;

list = list.split(' ').map(Number);
find = find.split(' ').map(Number);

function solution(list, find) {
  let result = [];
  let map = new Map();
  for (let l of list) {
    map.set(l, (map.get(l) ?? 0) + 1);
  }
  for (let f of find) {
    result.push(map.get(f) ?? 0);
  }
  return result.join(' ');
}

console.log(solution(list, find));
