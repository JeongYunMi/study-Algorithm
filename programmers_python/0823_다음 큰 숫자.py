
def solution(n):
    cnt = bin(n).count('1')
    number = n+1
    while True:
        if cnt == bin(number).count('1'):
            break
        else:
            number += 1
    return number