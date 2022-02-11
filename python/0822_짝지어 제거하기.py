"""
def solution(s):
    answer = 0
    idx = 1
    while idx<len(s):
        if s[idx] == s[idx - 1]:
            if len(s) == 2:
                answer = 1
                break
            else:
                s = s[:idx-1]+s[idx+1:]
            idx = 0
        else:
            idx += 1


    return answer
"""
"""
def solution(s):
    str = list(s)
    idx = 1
    while idx<len(str):
        if str[idx] == str[idx - 1]:
            str.pop(idx-1)
            str.pop(idx-1)
            idx = 1
        else:
            idx += 1

    if str:
        return 0
    else:
        return 1
"""
print(solution("aasfdsfrred"))