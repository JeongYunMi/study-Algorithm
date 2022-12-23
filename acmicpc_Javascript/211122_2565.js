let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let line = input[0].split(" ").map((x) => +x)[0]; //line

let cross = [];
let dp = Array(line);
dp.fill(1); //DP 테이블 초기화

for (let i = 1; i <= line; i++) {
  let temp = input[i].split(" ").map((x) => +x);
  cross.push(temp);
}

cross.sort((a, b) => {
  return a[0] - b[0];
});

for (let i = 1; i < line; ++i) {
  //최장 증가 부분 수열 코드
  for (let j = 0; j < i; ++j) {
    if (cross[j][1] < cross[i][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

let ans = 0;

for (let i = 0; i < dp.length; ++i) {
  if (ans < dp[i]) {
    ans = dp[i];
  }
}

// console.log(ans);

// console.log(cross);
// console.log(dp);
console.log(line - ans);
