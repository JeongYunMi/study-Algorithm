/**
 * 다이나믹 프로그래밍 DP 방식으로 풀 수 있을 것 같다.
 * 주어진 칸을 1칸 부터 시작해서 효진이가 뛸 수 있는 최대칸까지의 도달하는 경우의 수를 정리!
 * 
 * 
 * 
 * 1칸 - 1
 * (1)
 * 
 * 2칸 - 2
 * (1) + (1)
 * (2)
 * 
 * 3칸 - 3
 * (1) + (1) + (1)
 * (2) + (1)
 * 
 * (1) + (2)
 * 
 * 4칸 - 5
 * (1) + (1) + (1) + (1) -
 * (1) + (1) + (2)
 * (1) + (2) + (1) -
 * (2) + (1) + (1) -
 * (2) + (2)
 * 
 * 마지막에 한 칸을 뛸 경우 dp[i-1]
 * 마지막에 두 칸을 뛸 경우 dp[i-2]
 * 따라서 점화식은 dp[i] = dp[i-1] + dp[i-2]
 * 
 * 검증 dp[4] = dp[3] + dp[2]
 *          5  =  3  +  2
 */

 function solution(n) {
  let dp = Array(n+1).fill(0);
  dp[1] = 1;
  dp[2] = 2;

  for(let i = 3; i < n+1 ; ++i){
    dp[i] = (dp[i-1] + dp[i-2])%1234567;;
  }
  return dp[n];
}

console.log(solution(4))