def solution(number, k):
    answer = []
    for i in number:
        while k > 0 and answer and answer[-1] < i:
            answer.pop()
            k = k - 1
        answer.append(i)

    temp = "".join(answer)

    if k>0:
        return temp[:len(temp)-k]

    return temp

print(solution("4177252841", 9))
