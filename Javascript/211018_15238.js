// 문제해석 : 소문자로 이루어진 문장 내에 가장 많이 등장하는 알파벳과 그 수를 출력, 모두 한글자씩만 등장할 경우 출력문이 없는 듯 하다
// 풀이 아이디어
// 1. 소문자 알파벳의 수 많큼의 크기를 가진 배열을 하나 만들기
// 2. 문자열을 순회하며 해당 알파벳의 배열 인덱스를 1증가
// 3. 최댓값의 알파벳과 그 수를 출력 하되, 1일 경우 출력 없음

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = Number(input[0]); //입력받을 문장의 알파벳 수
let piratesString = input[1]; //입력받을 문장
let maxIdx = 0; //가장 많이 사용된 알파벳의 배열 인덱스 위치를 담을 변수
let alphabet = new Array(26); //각각의 알파벳의 사용횟수를 추적할 배열
alphabet.fill(0); //사용을 위해 0으로 초기회

//풀이 아이디어의 2번
for (let i = 0; i < count; ++i) {
  //입력된 문장을 담은 변수 piratesString을 한글자씩 반복하며
  //아스키코드로 변환한뒤 a의 값(97)으로 뺀 값을 인덱스 값으로 주고 1증가시킨다 == 등장 횟수
  alphabet[piratesString.charCodeAt(i) - 97]++;
}

//가장 많이 사용된 알파벳의 배열 인덱스 값을 찾는 반복문
for (let i = 0; i < 26; ++i) {
  if (alphabet[i] > alphabet[maxIdx]) {
    maxIdx = i;
  }
}

console.log(String.fromCharCode(97 + maxIdx), alphabet[maxIdx]); //출력
