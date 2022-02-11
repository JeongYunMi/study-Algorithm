# 소수 찾기
# 에라토스테네스의 체
# 다수의 소수를 찾을 때 사용하는 알고리즘
# 소수를 찾은 후, 그 배수는 소수가 아니게되므로 소수 목록에서 제거
# 2부터의 소수를 찾을 때 유용

import math


def solution(n):
    answer = 0
    arr = [True for i in range(n + 1)]

    for i in range(2, int(math.sqrt(n)) + 1):
        if arr[i]:
            j = 2
            while i * j <= n:
                arr[i * j] = False
                j += 1

    for i in range(2, n+1):
        if arr[i]:
            answer +=1

    return answer


print(solution(5))
