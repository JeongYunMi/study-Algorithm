# 위장
"""
# 조합계산
from itertools import combinations
def solution(clothes):
    cnt = dict()
    combi = []
    for i,j in clothes: #종류별로 의상이 몇개인지 사전 자료형을 이용하여 만들고
        if j in cnt:
            cnt[j] +=1
        else:
            cnt[j] = 1

    for i in cnt.keys():
        combi.append([i])


    for num in range(2, len(cnt.keys())+1):        # 의상 장르별 구분 조합
        temp = list(combinations(cnt.keys() ,num))
        for g in temp:
            combi.append(list(g))

    res = 0
    for x in combi:
        if len(x) == 1:
            res += cnt[x[0]]
        else:
            sum = 1
            for y in x:
                sum *= cnt[y]
            res += sum
    return res
"""

# 조합계산
def solution(clothes):
    cnt = dict()
    for i,j in clothes: #종류별로 의상이 몇개인지 사전 자료형을 이용하여 만들고
        if j in cnt:
            cnt[j] +=1
        else:
            cnt[j] = 1

    sum = 1
    for i in cnt.keys():
        sum *= (cnt[i]+1)

    return sum-1

print(solution([
    ["a", "a"],
    ["b", "b"],
    ["c", "c"]
]))

# 안입는 경우

