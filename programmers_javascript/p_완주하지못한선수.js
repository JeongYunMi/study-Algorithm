/**
 * 문제
 * 마라톤에 참여한 선수 명단(participant)과 그 중 완주한 선수 명단(completion)이 주어지고,
 * 선수 중 중복된 이름이 있을 수 있을 때, 완주하지 못한 단 한 명의 선수를 찾는 문제
 * 
 * 접근 방법
 * completion과 participant를 정렬한 뒤 데이터가 일치하지 않는 경우를 완주하지 못한 선수라고 간주하여 return
 */

 function solution(participant, completion) {
  participant = participant.sort();
  completion = completion.sort();

  for(let i = 0; i < participant.length; ++i){
      // console.log(participant[i], completion[i])
      if(participant[i] !== completion[i]){
          return participant[i];
      }
  }
}
console.log(solution(["mislav", "stanko", "mislav", "ana"], 	["stanko", "ana", "mislav"]))