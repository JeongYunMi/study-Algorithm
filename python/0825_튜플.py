"""
def solution(s):
    answer = []
    number_list = []
    for i in range(1, len(s)):
        if not (s[i] == "{" or s[i] == "," or s[i] == "}"):
            if s[i] in number_list:
                continue
            else:
                number_list.append(s[i])

    for i in number_list:
        answer.append(int(i))

    return answer
"""


def solution(s):
    answer = []
    number_list = []
    i = 0
    temp = []

    while i < len(s)-1:
        if not (s[i] == "{" or s[i] == ","):
            if s[i] == "}":
                i += 1
                number_list.append(temp)
                temp = []
            else:
                j = i
                while s[j] != "}" and s[j] != ",":
                    j += 1
                temp.append(int(s[i:j]))
                i = j
        else:
            i += 1

    number_list.sort(key=len)
    print(number_list)

    for i in number_list:
        for j in i:
            if answer.count(j):
                continue
            else:
                answer.append(j)

    return answer


print(solution("{{20,111},{111}}"))
