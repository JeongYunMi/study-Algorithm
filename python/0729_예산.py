#예산
# 시나리오 해석
# 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 최대 몇 개의 부서에 물품을 지원할 수 있는지 return 하도록 solution 함수를 완성

def solution(d, budget):
    answer = 0
    d = sorted(d)
    for i in d:
        if budget < i:
            break
        answer+=1
        budget-=i

    return answer

print(solution([2,2,3,3], 10))