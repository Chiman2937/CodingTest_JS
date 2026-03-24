const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(/\r?\n/);

let [n, ...stair] = input.map(Number);

function solution(n, stair) {
  stair.unshift(0);
  let dp = new Array(n + 1).fill(0);
  dp[1] = stair[1];
  if (n >= 2) dp[2] = stair[1] + stair[2];

  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + stair[i], dp[i - 3] + stair[i - 1] + stair[i]);
  }
  return dp[n];
}

console.log(solution(n, stair));
