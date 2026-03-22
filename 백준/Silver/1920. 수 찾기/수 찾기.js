const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, dic, m, find] = input;

dic = dic.split(' ').map(Number);
find = find.split(' ').map(Number);

function solution(n, dic, m, find) {
  let map = new Map();
  let result = '';
  for (let d of dic) {
    map.set(d, 1);
  }
  for (let f of find) {
    let isExist = false;
    if (map.get(f)) {
      result += '1\n';
      continue;
    }
    result += '0\n';
  }
  return result;
}

console.log(solution(n, dic, m, find));
