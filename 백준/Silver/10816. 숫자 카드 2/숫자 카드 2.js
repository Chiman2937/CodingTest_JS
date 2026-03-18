const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, cards, m, queries] = input;

function solution(n, cards, m, queries) {
  let result = '';

  let cardMap = new Map();
  for (let i = 0; i < n; i++) {
    if (!cardMap.get(cards[i])) cardMap.set(cards[i], 0);
    cardMap.set(cards[i], cardMap.get(cards[i]) + 1);
  }

  for (const q of queries) {
    result += (cardMap.get(q) ?? 0) + ' ';
  }

  return result;
}

console.log(
  solution(
    +n,
    cards.split(' ').map(Number),
    +m,
    queries.split(' ').map(Number),
  ),
);
