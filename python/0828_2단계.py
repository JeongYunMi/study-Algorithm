#-*- coding: utf-8-*-
"""
def solution(progresses, speeds):
    answer = []
    day = 0
    while progresses:
        if (100 - progresses[0]) % speeds[0] == 0:
            day += (100 - progresses[0]) // speeds[0]
        else:
            day += (100 - progresses[0]) // speeds[0] + 1

        i = 0
        for i in range(0, len(progresses)):
            if progresses[i] + (speeds[i] * day) >= 100:
                speeds.pop(0)
                progresses.pop(0)
                i += 1
            else:
                break
        answer.append(i)
    return answer


print(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))
"""

from itertools import combinations
from collections import Counter

def solution(orders, course):
    answer = []
    menu = dict()
    temp = []
    for orders in orders:
        for cnt in course:
            temp += combinations(sorted(orders), cnt)

            menu[cnt]

    print(menu)

    return answer

print(solution(["XYZ", "XWY", "WXA"], [2,3,4]))