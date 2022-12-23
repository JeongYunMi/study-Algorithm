#다리를 지나는 트럭
# 해결 아이디어
# 다리에는 트럭이 최대 bridge_length대 올라갈 수 있는데,
# 최대로 올라갈 수 있는 무게만큼 푸쉬해놓고 팝하기 푸쉬할 때마다 초 추가
# 다리를 지나는데는 bridge_length 만큼의 초가 든다
# 트럭은 일렬로 있다고 가정?

"""
def solution(bridge_length, weight, truck_weights):
    length = 0
    prev_weight = 0
    answer = 0

    for i in truck_weights:  # [7,4,5,6]
        length += 1
        prev_weight += i
        print(i, length, prev_weight, answer)

        if length <= bridge_length and prev_weight <= weight:
            answer += 1
            print(i, length, prev_weight, answer)

        else:
            answer += bridge_length
            prev_weight = 0
            length = 0
            print(i, length, prev_weight, answer)

    if length >= 0 and prev_weight >= 0:
        answer += bridge_length

    return answer
"""

"""
def solution(bridge_length, weight, truck_weights):
    answer = 0
    bridge = []
    i = 0

    while i < len(truck_weights):
        bridge.append(truck_weights[i])
        i += 1
        temp = i
        answer += 1
        for j in range(1, bridge_length):
            answer += 1
            print("1:", i ,j, i + j < len(truck_weights))

            if i + j < len(truck_weights):
                if sum(bridge) + truck_weights[i + j] <= weight:
                    bridge.append(truck_weights[i + j])
                    i += 1
                    answer += 1
                    print("2:", i, j, sum(bridge), answer)

        bridge.clear()

    return answer + 1
"""

def solution(bridge_length, weight, truck_weights):
    q = [0] * bridge_length
    print(q)
    answer = 0

    while q:
        answer += 1
        q.pop(0)
        print(q)
        if truck_weights:
            if sum(q) + truck_weights[0] <= weight:
                q.append(truck_weights.pop(0))
            else:
                q.append(0)

    return answer

print(solution(2, 10, [7,4,5,6]))
