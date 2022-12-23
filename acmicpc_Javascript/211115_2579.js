let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let n = input[0].split(" ").map((x) => +x)[0]; //n: 계단의 수

let value = []; //가장 높이 있는 계단의 값부터 저장할 배열

let dp = Array(n);
dp.fill(1); //DP 테이블 초기화

for (let k = 1; k <= n; ++k) {
  value.push(+input[k]); //계단에 할당된 점수를 높은계단부터 역으로 받아온다.
}

dp[0] = value[0];
dp[1] = dp[0] + value[1];
dp[2] = Math.max(value[0] + value[2], value[1] + value[2]);
for (let i = 3; i < n; ++i) {
  dp[i] = Math.max(dp[i - 2] + value[i], dp[i - 3] + value[i - 1] + value[i]);
}

console.log(dp[n - 1]);
console.log(dp);

/*

let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let n = input[0].split(" ").map((x) => +x)[0]; //n: 계단의 수

let value = []; //가장 높이 있는 계단의 값부터 저장할 배열

let dp = Array(n);
dp.fill(1); //DP 테이블 초기화

for (let k = 1; k <= n; ++k) {
  //console.log(k);
  value.push(+input[k]); //계단에 할당된 점수를 높은계단부터 역으로 받아온다.
}
//console.log(value);

dp[0] = value[0];
dp[1] = dp[0] + value[1];
dp[2] = Math.max(value[0] + value[2], value[1] + value[2]);
//dp[2] = Math.max(dp[1], dp[0] + value[2]);
for (let i = 3; i < n; ++i) {
  dp[i] = Math.max(dp[i - 2] + value[i], dp[i - 3] + value[i - 1] + value[i]);
}

console.log(dp[n - 1]);

*/
