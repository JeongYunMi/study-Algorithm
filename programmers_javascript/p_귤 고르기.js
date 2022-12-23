
/**
 * 문제
 * 경화가 수확한 귤 중 'k'개를  골라 상자 하나에 담아 판매 하고자 한다.
 * 수확한 귤의 크기가 담긴 배열이 들어오고 k개를 골라 판매할 때
 * 서로 다른 크기의 수를 최소화하면 몇 개의 귤 종류가 담기는지 반환한다.
 * 
 * 입력
 * k : 판매할 귤의 수(6)
 * tangerine: 귤의 크기를 담은 배열([1, 3, 2, 5, 4, 5, 2, 3])
 * 
 * 출력
 * 서로 다른 크기의 수를 최소화하여 판매할 경우 상자에 담기는 귤의 크기 종류(3)
 * 
 * 접근 방법
 * 먼저 각 귤 크기의 수를 count
 * 이후 같은 크기의 수가 많은 순서대로 정렬한다
 * k에서 해당 크기의 귤 수를 뺄셈하여 k가 0이 되면 현재까지 상자에 들어간 귤 종류 수를 return
 */

function solution(k, tangerine) {
  var answer = 0;
  tangerine = tangerine.sort()                        //tangerine 정렬
  let index = [...new Set(tangerine)];                //tangerine에 존재하는 귤 크기를 중복 제거 후 배열 화
  let arr = Array(new Set(tangerine).size).fill(0);   //각 크기 별 귤의 개수를 셀 배열
  let cnt = 0;                                        
  // console.log(arr, index)

  for(let i = 0; i<tangerine.length; ++i){            // 크기별 귤 개수 count
    if(index[cnt] === tangerine[i]){
      ++arr[cnt];
    }else{
      ++cnt;
      ++arr[cnt];
    }
  }
  // console.log(arr);

  arr.sort((a,b)=> b-a);                              // 같은 크기의 귤 수가 많은 순서대로 정렬
  for (let i = 0; i < arr.length; i++) {
    if(k-arr[i] > 0){
      k -= arr[i]
    }else{
      answer = i + 1;
      break;
    }
    
  }
  return answer; 
}


console.log(solution(6, [1,1,1,1,2,2,2,3,3,4]	))
