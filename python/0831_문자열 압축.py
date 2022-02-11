def solution(s):
    answer = len(s)
    max_i = len(s) // 2 +1
    for i in range(1, max_i):
        temp = []
        temp_s = ""
        for j in range(0, len(s), i):
            temp.append(s[j:j + i])

        temp.append("0")

        cnt = 1
        for k in range(1, len(temp)):
            if temp[k] == temp[k - 1]:
                cnt += 1
            else:
                if cnt == 1:
                    temp_s += temp[k - 1]
                else:
                    temp_s += str(cnt) + temp[k - 1]
                cnt = 1

        print(temp)
        print(temp_s)
        answer = min(answer, len(temp_s))

    return answer


print(solution("ababcdcdababcdcd"))
