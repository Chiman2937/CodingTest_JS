const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, numbers] = input;
numbers = numbers.split(' ').map(Number);

function solution(n, numbers) {
  let map = [...new Set(numbers)].sort((a, b) => a - b);
  let mapSize = map.length;
  let result = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let target = numbers[i];
    let left = 0;
    let right = mapSize;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (map[mid] === target) {
        result[i] = mid;
        break;
      } else if (map[mid] < target) left = mid + 1;
      else if (map[mid] > target) right = mid;
    }
  }
  return result.join(' ');
}

console.log(solution(+n, numbers));
