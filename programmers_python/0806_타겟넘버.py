# 해결 아이디어
# 리스트로 들어온 숫자를 하나씩 더하고 빼주는 모든 경우를 재귀함수로 구현
# 이후 마지막 인덱스의 원소를 계산한 값이 목표값과 맞으면 참, 아니면 거짓

def dfs(number_list, now_idx, prev_sum, sign, target):
    if sign == "+":
        prev_sum += number_list[now_idx]
    else:
        prev_sum -= number_list[now_idx]

    if now_idx == len(number_list) - 1:
        if prev_sum == target:
            return 1
        else:
            return 0
    else:
        return dfs(number_list, now_idx + 1, prev_sum, "+", target) + dfs(number_list, now_idx + 1, prev_sum, "-",
                                                                          target)


def solution(numbers, target):
    answer = dfs(numbers, 0, 0, "+", target) + dfs(numbers, 0, 0, "-", target)
    return answer


print(solution([1, 1, 1, 1, 1], 3))
