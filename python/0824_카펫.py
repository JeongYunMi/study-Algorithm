import math

def solution(brown, yellow):
    answer = []
    divisor= []
    if yellow<=2:
        divisor.append(yellow)

    for i in range(2, int(math.sqrt(yellow)) + 1):
        if yellow % i == 0:
            divisor.append(i)

    divisor.sort(reverse=True)

    for x in divisor:
        if (brown+yellow) % (x+2) == 0:
            answer.append(x+2)
            answer.append((brown+yellow)//(x+2))
            break

    answer.sort(reverse=True)
    return answer
print(solution(10,2))