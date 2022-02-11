# 같은 숫자는 싫어
def solution(arr):
    answer = list([])
    prev = arr[0]
    for i in range(0, len(arr)):
        if arr[i] != prev:
            answer.append(prev)
            prev = arr[i]
    answer.append(prev)
    return answer

print(solution([1,1,2,2,4,5,9,8,7,8]))

# 1 1 1 3 4 5 5 6
# 1
#
#