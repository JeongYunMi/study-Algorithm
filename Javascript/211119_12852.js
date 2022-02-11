//문제 해석은 필요없다.
//풀이 아이디어 이것은 DP다!!!

let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let N = Number(input[0]); //N
let now = N;
let dp = Array(N + 1);
dp.fill(0);
numberList = Array(N + 1);
numberList.fill(0);
let ans = N + " ";

for (let i = 2; i < N + 1; ++i) {
  dp[i] = dp[i - 1] + 1;
  numberList[i] = i - 1;
  if (i % 3 == 0) {
    dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    if (dp[i] == dp[i / 3] + 1) {
      numberList[i] = i / 3;
    }
  }

  if (i % 2 == 0) {
    dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (dp[i] == dp[i / 2] + 1) {
      numberList[i] = i / 2;
    }
  }
}

while (now !== 1) {
  ans += String(numberList[now]) + " ";
  now = numberList[now];
}

console.log(ans);
console.log(dp[5]);
console.log(numberList);
