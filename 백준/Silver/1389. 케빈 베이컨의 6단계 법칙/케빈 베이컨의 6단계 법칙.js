const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [n, m] = num.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

function solution(n, m, list) {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }
  for (let [s, f] of list) {
    map.get(s).push(f);
    map.get(f).push(s);
  }

  let result = [0, Infinity];

  for (let i = 1; i <= n; i++) {
    let sum = 0;
    let visitors = new Set();
    visitors.add(i);
    let queue = [[i, 0]];
    while (queue.length) {
      let [key, distance] = queue.shift();
      sum += distance;
      for (let neighbor of map.get(key)) {
        if (!visitors.has(neighbor)) {
          queue.push([neighbor, distance + 1]);
          visitors.add(neighbor);
        }
      }
    }
    result = result[1] > sum ? [i, sum] : result;
  }
  return result[0];
}

console.log(solution(n, m, list));
