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
  let visitors = new Set();
  let result = 0;
  for (let i = 1; i <= n; i++) {
    if (!visitors.has(i)) {
      result++;
    } else {
      continue;
    }
    let queue = [i];
    let head = 0;
    while (queue.length > head) {
      let key = queue[head];
      head++;
      if (visitors.has(key)) continue;
      visitors.add(key);
      for (let neighbor of map.get(key)) {
        if (visitors.has(neighbor)) continue;
        queue.push(neighbor);
      }
    }
  }
  return result;
}

console.log(solution(n, m, list));
