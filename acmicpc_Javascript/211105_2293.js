// 문제해석: 임의의 화폐 종류 n개가 주어질 때 n개 종류의 화폐를 사용하여 K원을 만드는 경우의 수
// 풀이 아이디어
// DP 테이블을 만들어 k원까지의 모든 금액에 대한 경우의 수 체크

let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");
let n = input[0].split(" ").map((x) => +x)[0];
let k = input[0].split(" ").map((x) => +x)[1];
let value = [];
let dp = Array(k + 1);

dp.fill(0);
dp[0] = 1;

for (let i = 1; i <= n; ++i) {
  value.push(+input[i]);
}

value.forEach((e) => {
  for (let j = e; j <= k; j++) {
    dp[j] += dp[j - e];
  }
});

console.log(dp[k]);
