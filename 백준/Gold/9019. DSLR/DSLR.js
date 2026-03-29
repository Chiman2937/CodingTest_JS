const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let = [t, ...cases] = input;
cases = cases.map((v) => v.split(' ').map(Number));

function solution(cases) {
  let result = '';
  for (let [start, target] of cases) {
    let prev = new Array(10000).fill(null);
    prev[start] = -1;
    let queue = [start];
    let dirs = ['D', 'S', 'L', 'R'];
    let head = 0;
    while (queue.length > head) {
      let n = queue[head++];
      if (n === target) break;
      for (let c of dirs) {
        let v = calc(c, n);
        if (prev[v] === null) {
          queue.push(v);
          prev[v] = [n, c];
        }
      }
    }
    let command = '';
    let i = target;
    while (true) {
      if (prev[i] === -1) break;
      let [v, c] = prev[i];
      command = c + command;
      i = v;
    }
    result += command + '\n';
  }
  return result;
}

function calc(command, n) {
  switch (command) {
    case 'D':
      return (n * 2) % 10000;
    case 'S':
      return n === 0 ? 9999 : n - 1;
    case 'L':
      return (n % 1000) * 10 + Math.floor(n / 1000);
    case 'R':
      return (n % 10) * 1000 + Math.floor(n / 10);
  }
}

console.log(solution(cases));
