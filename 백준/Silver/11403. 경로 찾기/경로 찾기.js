const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;
list = list.map((v) => v.split(' ').map(Number));

function solution(n, list) {
  let result = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let map = new Map();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (list[i][j] === 1) {
        if (!map.get(i)) map.set(i, []);
        map.get(i).push(j);
      }
    }
  }

  for (let s = 0; s < n; s++) {
    for (let f = 0; f < n; f++) {
      let isConnected = false;
      let queue = [s];
      let visitors = new Set();
      visitors.add(s);
      while (queue.length) {
        let key = queue.shift();
        if (!map.get(key)) continue;
        for (let next of map.get(key)) {
          if (next === f) {
            isConnected = true;
            break;
          }
          if (!visitors.has(next)) {
            queue.push(next);
            visitors.add(next);
          }
        }
      }
      if (isConnected) result[s][f] = 1;
    }
  }

  return result.map((v) => v.join(' ')).join('\n');
}

console.log(solution(+n, list));
