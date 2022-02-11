# 메뉴리뉴얼
# 해결 아이디어
# 그래프 처리 후 가장 두개 이상 연결된 간선만 살려서
# 순회가 되는 메뉴의 개수별로 문자열 생성
# 실패,,
"""
def sequence(ch):
    return abs(ord("A")-ord(ch))

def solution(orders, course):
    answer = []
    menu_graph = [[chr(65+i)] for i in range(26)]
    for menu in orders:
        for i in range(len(menu)):
            for j in range(len(menu)):
                if i == j:
                    pass
                else:
                    menu_graph[sequence(menu[i])].append((menu[j]))
    print(menu_graph)
    for i in menu_graph:
        if len(i) == 1:
            del menu_graph[i]
            continue
        else:
            for j in range(1, len(i)):
                if i.count(i[j]) == 1:



    return answer,course
"""


#
#
from itertools import combinations
from collections import Counter


def solution(orders, course):
    answer = []

    for c in course:
        temp = []
        for order in orders:
            combi = combinations(sorted(order), c)
            temp += combi

        odict = Counter(temp)


        if odict:
            max_ = max(list(odict.values()))
            if max_ >= 2:
                for key, value in odict.items():
                    if odict[key] == max_:
                        answer.append(''.join(key))

    return sorted(answer)

print(solution(["XYZ", "XWY", "WXA"], [2,3,4]))