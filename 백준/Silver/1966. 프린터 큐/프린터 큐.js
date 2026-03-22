const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...list] = input;

function solution(list) {
  let result = '';
  for (let i = 0; i < list.length; i += 2) {
    let target = +list[i].split(' ')[1];
    let print = [];
    let queue = list[i + 1].split(' ').map(Number);
    queue = queue.map((v, i) => ({
      priority: v,
      index: i,
    }));
    while (queue.length > 0) {
      let item = queue.shift();
      if (queue.some((v) => v.priority > item.priority)) {
        queue.push(item);
      } else {
        if (item.index === target) {
          result += print.length + 1 + '\n';
          break;
        }
        print.push(item);
      }
    }
  }
  return result;
}

console.log(solution(list));
