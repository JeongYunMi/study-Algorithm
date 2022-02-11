let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let N = Number(input[0]); //N
let dp = Array(N + 1);
dp.fill(""); //DP 테이블 초기화

dp[1] = "SK";

for (let i = 2; i <= N; ++i) {
  if (dp[i - 1] == "CY") {
    dp[i] = "SK";
  } else {
    dp[i] = "CY";
  }
}

console.log(dp[N]);
