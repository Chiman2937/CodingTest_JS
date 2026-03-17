const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, ...people] = input;

function solution(n, people) {
  let result = '';
  for (let i = 0; i < people.length; i++) {
    let rank = 1;
    for (let j = 0; j < people.length; j++) {
      if (i === j) continue;
      const [me_x, me_y] = people[i].split(' ').map(Number);
      const [p_x, p_y] = people[j].split(' ').map(Number);
      if (me_x < p_x && me_y < p_y) rank++;
    }
    result += i === 0 ? rank : ' ' + rank;
  }
  return result;
}

console.log(solution(n, people));
