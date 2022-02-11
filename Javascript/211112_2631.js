let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let n = input[0].split(" ").map((x) => +x)[0]; //n: 번호표의 최대값

let value = []; //아이들 현재 선 순서를 담을 배열

let dp = Array(n);
dp.fill(1); //DP 테이블 초기화

for (let k = 1; k <= n; ++k) {
  value.push(+input[k]); //아이들이 선 순서를 배열에 추가
}

for (let i = 1; i < n; ++i) {
  //최장 증가 부분 수열 코드
  for (let j = 0; j < i; ++j) {
    if (value[j] < value[i]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

let maxLength = dp.reduce(function (a, b) {
  //가장 긴 부분 수열의 길이를 구한다.
  return Math.max(a, b);
});

console.log(n - maxLength); //N값에서 빼준다.
