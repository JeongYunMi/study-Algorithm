# H-index
# 해결 아이디어
# 정렬을 한 후
# 뒤쪽 인덱스부터 순회를 돌면서
# 해당 인덱스의 원소 값이 인덱스부터 배열 끝인덱스에서 현재의 인덱스를 뺀 값 보다 작으면

def solution(citations):
    answer = 0
    sort_arr = sorted(citations)
    max_index = len(citations)
    print(sort_arr)

    for i in range(max_index - 1, -1, -1):
        print(i, max_index - i)
        if sort_arr[i] == max_index - i:
            answer += 1
            break
        elif sort_arr[i] < max_index - i:
            break
        else:
            answer += 1

    return answer


print(solution([6, 5, 3, 1, 0]))
