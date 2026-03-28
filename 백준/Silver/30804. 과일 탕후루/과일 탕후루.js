const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, list] = input;
list = list.split(' ').map(Number);

function solution(n, list) {
  let result = 0;
  let left = 0;
  let right = 0;
  let sum = 0;
  let map = new Map();
  while (right < n) {
    while (map.size > 1) {
      let target = list[left];
      sum--;
      if (map.get(target) === 1) map.delete(target);
      else map.set(target, map.get(target) - 1);
      left++;
    }
    while (right < n && (map.size < 2 || map.get(list[right]) !== undefined)) {
      let target = list[right];
      sum++;
      map.set(target, (map.get(target) ?? 0) + 1);
      right++;
    }
    result = Math.max(result, sum);
  }
  return result;
}

console.log(solution(+n, list));
