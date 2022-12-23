let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let N = Number(input[0]); //N
let dp = Array.from({ length: N + 1 }, () => Array());

dp[1] = [10n, 9n, 8n, 7n, 6n, 5n, 4n, 3n, 2n, 1n];

for (let i = 2; i <= N; ++i) {
  dp[i].push(BigInt(dp[i - 1].reduce((a, b) => a + b)));
  for (let j = 0; j < dp[i - 1].length - 1; ++j) {
    dp[i].push(BigInt(dp[i][j] - dp[i - 1][j]));
  }
}

let ans = String(dp[N][0] % 10007n);

console.log(ans);
