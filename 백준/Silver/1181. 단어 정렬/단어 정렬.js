const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

const [n, ...words] = input;

function solution(n, words) {
  words = [...new Set([...words])];

  words.sort((a, b) => {
    // 길이가 짧은것부터
    if (a.length !== b.length) return a.length - b.length;
    // 길이가 같으면 사전순
    if (a.length === b.length) return a.localeCompare(b);
  });
  for (const word of words) {
    console.log(word);
  }
}

solution(n, words);
