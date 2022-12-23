# 구명보트
"""
from collections import deque
def solution(people, limit):
    answer = 0
    now = 0
    people.sort()
    sort_people = deque(people)

    for i in sort_people:
        if now + i > limit:
            answer +=1
            now = i
        else:
            now += i

    return answer+1



def solution(people, limit):
    answer = 0
    # 사람들 무게 오름차순 정렬
    people.sort()

    a = 0
    b = len(people) - 1
    while a < b:
        # 가장 많이 나가는 사람이랑 + 가장 적게 나가는 사람 비교해서 작은 경우 들어가는 조건식
        if people[b] + people[a] <= limit:
            # 가장 적게 나가는 사람 다음 사람으로 선택
            a += 1
            answer += 1
        # 무게 많이 나가는 사람  앞 사람 이동
        b -= 1
    # 총인원 - 2명이서 나간 보트 수  =
    return len(people) - answer
"""


def solution(people, limit):
    now = 0
    f = 0
    l = len(people) - 1
    people.sort()
    while l > f:
        if people[f] + people[l] <= limit:
            f += 1
            l -= 1
            now += 1
        else:
            l -= 1

    return len(people) - now


print(solution([160, 150, 140, 60, 50, 40], 200))
