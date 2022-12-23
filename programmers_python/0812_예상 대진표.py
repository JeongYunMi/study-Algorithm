#예상 대진표
def solution(n, a, b):
    answer = 1
    if a > b:
        a, b = b, a

    while n:
        if a % 2 == 1 and a + 1 == b:
            break
        if a % 2 == 1:
            a = a // 2 + 1
        else:
            a = a // 2
        if b % 2 == 1:
            b = b // 2 + 1
        else:
            b = b // 2
        n = n // 2
        answer += 1

    return answer