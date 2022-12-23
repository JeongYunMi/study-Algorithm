// https://school.programmers.co.kr/learn/courses/30/lessons/42860
// 탐욕법 문제

/**
 * 접근법
 * 커서를 움직이는 횟수를 포함하여 조이스틱이 A부터 가장 적게 움직이는 경우의 수를 찾아서 하나씩 선택하여 돌리면 될 것 같다.
 * 선택지는 
 * 위/ 아래
 * 커서 이동 오른쪽/왼쪽
 */

function isEnd(now){
  const iterator = now.values();
  for(const val of iterator){
    if(val !== "0"){
      return 1;
    }
  }
  return 0;
}

function solution(name) {
  let moveCnt = 0;
  let nowIndex = 0;
  let nameArray = Array.from(name).map(e=> {
    if(e === "A"){
      return "0"
    }else{
      return e;
    }
  });

  while(isEnd(nameArray)){
   if(Math.abs("A".charCodeAt(0)-name.charCodeAt(nowIndex)), Math.abs("Z".charCodeAt(0)-name.charCodeAt(nowIndex))+1) 
   nameArray[nowIndex] = "0";
   console.log(nameArray)
  }
  return moveCnt;
}

console.log(solution("JEROEN"));
// console.log(solution("JAN"));

