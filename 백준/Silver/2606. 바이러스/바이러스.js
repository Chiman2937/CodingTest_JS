const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, c, ...list] = input;

function solution(list) {
  let map = new Map();
  for (let l of list) {
    let [s, f] = l.split(' ').map(Number);
    map.set(s, [...(map.get(s) ?? []), f]);
    map.set(f, [...(map.get(f) ?? []), s]);
  }

  if (!map.get(1)) return 0;

  let queue = [[1, 0]];
  let visitors = new Set();
  while (queue.length > 0) {
    let [key, distance] = queue.shift();
    if (visitors.has(key)) continue;
    visitors.add(key);
    for (let next of map.get(key)) {
      if (visitors.has(next)) continue;
      queue.push([next, distance + 1]);
    }
  }
  return visitors.size - 1;
}

console.log(solution(list));
