const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [t, ...testCases] = input;

function solution(t, testCases) {
  let result = '';
  for (let i = 0; i < t * 3; i += 3) {
    let commands = testCases[i];
    let n = testCases[i + 1];
    let numbers = testCases[i + 2]
      .substring(1, testCases[i + 2].length - 1)
      .split(',')
      .map(Number);
    let isReverse = false;
    let left = 0;
    let right = n - 1;
    let isError = false;
    for (let i = 0; i < commands.length; i++) {
      const command = commands[i];
      if (command === 'R') {
        isReverse = !isReverse;
      } else {
        if (isReverse) right--;
        else left++;
      }
      if (left > right + 1 || left < 0 || right >= n) {
        isError = true;
        break;
      }
    }
    if (isError) {
      result += 'error' + '\n';
      continue;
    }
    let array = [];
    if (isReverse) {
      for (let i = right; i >= left; i--) {
        array.push(numbers[i]);
      }
    } else {
      for (let i = left; i <= right; i++) {
        array.push(numbers[i]);
      }
    }
    result += '[' + array.join(',') + ']' + '\n';
  }
  return result;
}

console.log(solution(+t, testCases));
