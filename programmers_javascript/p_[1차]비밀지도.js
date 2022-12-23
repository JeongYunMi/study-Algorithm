/**
 * 정수 n개 짜리 배열이 각각 2개 들어왔을  때,
 * 이진수로 변환한 뒤 or 연산하여 1은 # 0은 공백으로 출력 
 * */

/** 
 * 해당 숫자 2진수로 변환
*/
function asBinary(n) {
  if(n>1) return asBinary(parseInt(n/2))+`${n%2}`
  return `${n%2}`
}

/**
 * 변환된 2진수가 자리값이 안맞을 수 있기 때문에 알맞게 앞에 0 붙이기
 */
function asStr(n, number) {
  let prevStr = ""
  let tmp = asBinary(number);
  if(tmp.length<n){
    for(let i = 0; i< n-tmp.length; ++i){
      prevStr += "0"
    }
  }
  return prevStr + tmp;
}

 function solution(n, arr1, arr2) {
  let answer = [];
  
  // arr1 2진수 변환작업
  let res1 = arr1.map((e)=>{
    return asStr(n, e)
  });

  // arr2 2진수 변환작업
  let res2 = arr2.map((e)=>{
    return asStr(n, e)
  });

  // 비교하여 #과 0으로 나누기
  for(let i = 0; i< n; ++i ){
    let mapLine = ""
    for(let j = 0; j < n ; ++j){
      if(res1[i][j] === '1' || res2[i][j] === '1'){
        mapLine += "#";
      }else{
        mapLine += " ";
      }
    }
    answer.push(mapLine)
  }
  
  return answer;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]))
