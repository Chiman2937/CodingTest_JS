const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, list] = input;
list = list.split(' ').map(Number);

function solution(n, list) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let map = new Map();
  let result = 0;
  while (right < n) {
    map.set(list[right], (map.get(list[right]) ?? 0) + 1);
    right++;
    sum++;
    while (map.size > 2) {
      if (map.get(list[left]) === 1) map.delete(list[left]);
      else map.set(list[left], map.get(list[left]) - 1);
      left++;
      sum--;
    }
    result = Math.max(result, sum);
  }
  return result;
}

console.log(solution(+n, list));
