# 가운데 글자 가져오기
def solution(s):
    temp = len(s)
    if temp % 2 == 0:
        answer = s[(temp//2 - 1): (temp//2 + 1)]
    else:
        answer = s[(temp//2): (temp//2 + 1)]
    return answer

print(solution("qwer"))
print(solution("abcde"))