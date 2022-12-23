//https://school.programmers.co.kr/learn/courses/30/lessons/42862
/**
 * 탐욕법 문제
 * 문제 해석 
 * 체육복을 도난 당한 학생들의 번호와 여벌 체육복을 가진 학생들의 번호 목록이 주어질 때,
 * 최대한 많은 학생들이 체육복을 입고 수업을 들을 수 있는 수 구하기
 * 체육복을 빌려줄 때는 사이즈를 고려해야하기 때문에 앞 뒤 번호 학생만 빌려 줄 수 있다. ( 4번 학생은 3번 혹은 5번에게만 대여해줄 수 있음)
 * 이 때, 여벌옷을 가져온 학생이 체육복을 도난당한 경우의 수가 존재하고 이 경우 다른 학생에게 체육복을 빌려줄 수 없다.
 * 
 * 입력
 * n: 전체 학생 수 (2<=n<=30)
 * lost: 체육복을 도난 당한 학생들의 번호 배열 (1<= lost <= n)
 * reserve: 여벌 체육복을 가지고 있는 학생들의 번호 배열 (1<= reserve <= n)
 * 
 * 출력
 * 체육복을 입고 수업을 들을 수 있는 학생 수 최댓값
 * 
 * n      lost    reserve   return
 * 5      [2,4]   [1,3,5]     5
 * 5      [2,4]     [3]       4
 * 3      [3]       [1]       2
 */

/**
 * 접근법
 * 도난당한 학생이 여분옷을 가지고 온 학생 본인인지 체크하고 양측 배열에서 제거
 * 도난당한 학생 명단을 한바퀴 돌면서 여분옷을 가지고 온 학생과 앞 뒤 번호일시 answer 1증가
 * 반복문이 끝나면 
 * 전체 학생 수(n) - 도난당한 학생 수(lost.length) + 빌리는 데 성공한 학생 수(answer) 로 출력 
 */


function solution(n, lost, reserve) {
  let answer = 0;
  let overlap = [];

  // 여분 옷을 가지고 온 학생이 도난당한 학생인지 체크
  for(el in lost){
    if(reserve.includes(lost[el])){
      overlap.push(lost[el]);
    }
  }

  // 배열에서 제거
  lost = lost.filter(el => !overlap.includes(el)).sort();
  reserve = reserve.filter(el => !overlap.includes(el)).sort();


  // 앞 뒤 번호에 빌릴 학생이 있는지 체크
  for(let i = 0; i< lost.length; ++i){
    for(let j = 0; j < reserve.length; ++j){
      let suc = lost[i]-reserve[j];
      if(suc>= -1 && suc<= 1){
        // 여분 체육복을 빌려준 뒤에는 reserve 명단에서 제거
        reserve = reserve.filter(e=>e !== reserve[j])
        answer += 1;
        break;
      }
    }
  }

  return n - lost.length + answer;
}

// console.log(solution(5, [2,4], [1,3,5]))
// console.log(solution(5, [2,4], [3]))
// console.log(solution(3, [3], [1]))
console.log(solution(13, [1, 2, 5, 6, 10, 12, 13], [2, 3, 4, 5, 7, 8, 9, 10, 11, 12]))
console.log(solution(8, [5,6,7], [4,5]))
// console.log(solution(5, [4, 2], [3, 5]))
