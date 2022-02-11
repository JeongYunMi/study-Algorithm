# 소수 만들기
# 해결 아이디어
# itertools의 combinations()함수를 이용하여 조합사용 -> 리스트 처리
# 더하고 소수인지 확인 -> math
# 카운트 추가

import itertools
import math

def is_prime_number(sum):
    for i in range(2, int(math.sqrt(sum)) + 1):
        if sum % i == 0:
            return False
    return True


def solution(nums):
    answer = 0
    combinations_list = list(itertools.combinations(nums, 3))

    for combination in combinations_list:
        if is_prime_number(combination[0]+combination[1]+combination[2]):
            answer+=1

    return answer

print(solution([1,2,3,4]))