// 문제해석 : 입력된 숫자목록에서 -1 기준으로 각각 왼쪽과 오른쪽의 최솟값 찾기
// 풀이 아이디어
// 1. -1 기준으로 각각 왼쪽과 오른쪽으로 슬라이스
// 2. 각각의 배열에서 최솟값 찾기
// 3. 더하여 출력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ice = input[1].split(" ").map((x) => +x); // 숫자 배열로 전환
let idx = ice.findIndex((e) => e === -1); //펭귄이 있는 블록 번호 찾기

// 펭귄의 오른쪽, 왼쪽 블록 배열을 작은 순으로 정렬
// 유니코드가 아닌 숫자 크기 순으로 정렬하기 위해 sort에 파라미터 함수 줌
let left = ice.slice(0, idx).sort((a, b) => a - b);
let right = ice.slice(idx + 1).sort((a, b) => a - b);

console.log(left[0] + right[0]); //더하여 출력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let ice = input[1].split(" ").map((x) => +x); // 숫자 배열로 전환
let idx = ice.findIndex((e) => e === -1); //펭귄이 있는 블록 번호 찾기

//각각 왼쪽과 오른쪽 블록의 최솟값 인덱스를 찾는다.
let left = 0;
let right = ice.length - 1;
for (let i = 0; i < idx; ++i) {
  if (ice[left] > ice[i]) {
    left = i;
  }
}

for (let i = idx + 1; i < ice.length; ++i) {
  if (ice[right] > ice[i]) {
    right = i;
  }
}

console.log(ice[left] + ice[right]); //더하여 출력
