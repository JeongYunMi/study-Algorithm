// 문제번호 1904
// 문제해석: 2진수의 길이 값 N이 들어올 때, 00, 11 (N=2)와 1, 타일 조합을 통해 만들 수 있는 이진수의 개수
// 입력: 1이상 백만 이하의 이진수의 길이 N
// 출력: 길이가 N인 모든 2진 수열의 개수를 15764으로 나눈 나머지

/**
 * 풀이 아이디어
 * DP 테이블을 사용한 보텀업 방식
 * 1. 먼저 N을 2개 소모하는 경우(00, 11)와 N을 1만 소모(1)하는 경우로 나눈다.
 * 2. 왼쪽부터 2진수의 비트를 타일로 채우는데, 현재 왼쪽부터 a(i) 위치의 비트를 채우는 경우의 수는 a(i) = a(i-1)+a(i-2) 이다.
 * 3. a(N)까지의 연산을 끝내고 15746값으로 나눈 나머지를 출력한다.
 */

let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let N = Number(input[0]); //N
const makeBinary = Array({ length: 1000001 }, () => 0);

makeBinary[1] = 1;
makeBinary[2] = 2;

for (let i = 3; i <= N; ++i) {
  makeBinary[i] = (makeBinary[i - 1] + makeBinary[i - 2]) % 15746;
}

console.log(makeBinary[N]);
