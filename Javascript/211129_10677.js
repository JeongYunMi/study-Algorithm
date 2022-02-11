let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let n = input[0].split(" ").map((x) => +x)[0];

let value = [];

let dp = Array(n + 1);
dp.fill(0);

for (let k = 1; k <= n; ++k) {
  value.push(+input[k]);
}

dp[1] = 1;
dp[2] = 2;
dp[3] = 4;

for (let i = 4; i <= Math.max(...value); ++i) {
  dp[i] = dp[i - 3] + dp[i - 2] + dp[i - 1];
}

for (let j = 0; j < value.length; ++j) {
  console.log(dp[value[j]]);
}
