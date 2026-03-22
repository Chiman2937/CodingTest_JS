const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [v, ...array] = input;
let [n, m] = v.split(' ').map(Number);

let list = array.slice(0, n);
let find = array.slice(n);

function solution(list, find) {
  let result = '';
  let map = new Map();
  for (let l of list) {
    let [site, password] = l.split(' ');
    map.set(site, password);
  }
  for (let f of find) {
    result += map.get(f) + '\n';
  }
  return result;
}

console.log(solution(list, find));
