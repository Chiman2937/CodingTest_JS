const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [num, ...list] = input;
let [n, m, v] = num.split(' ').map(Number);
list = list.map((v) => v.split(' ').map(Number));

function solution(list, n, v) {
  let map = new Map();
  for (let i = 1; i <= n; i++) {
    map.set(i, []);
  }
  for (let [s, f] of list) {
    map.get(s).push(f);
    map.get(f).push(s);
  }
  for (let i = 1; i <= n; i++) {
    map.get(i).sort((a, b) => a - b);
  }

  let result = '';
  // dfs

  let visitors = new Set();

  function dfs(n) {
    if (visitors.has(n)) return;
    visitors.add(n);
    for (let item of map.get(n)) {
      dfs(item);
    }
  }
  dfs(v);
  result += [...visitors].join(' ') + '\n';

  // bfs
  visitors = new Set();
  let queue = [v];
  while (queue.length > 0) {
    let key = queue.shift();
    if (visitors.has(key)) continue;
    visitors.add(key);
    for (let item of map.get(key)) {
      if (visitors.has(item)) continue;
      queue.push(item);
    }
  }
  result += [...visitors].join(' ') + '\n';
  return result;
}

console.log(solution(list, n, v));
