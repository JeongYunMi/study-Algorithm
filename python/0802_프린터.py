#프린터
def solution(priorities, location):
    answer = 0
    s = []
    print(s)
    for i in range(0, len(priorities)):
        s.append([priorities[i], False])

    s[location][1] = True

    print(s)
    while s:
        i = 1
        while i < len(s):
            print(s[0][0], s[i][0])
            if s[0][0] < s[i][0]:
                s.append(s.pop(0))
                i = 1
                print(s)
            else:
                i += 1

        temp = s.pop(0)
        print(temp)
        answer += 1
        if temp[1] == True:
            return answer



print(solution([1, 1, 9, 1, 1, 1], 0))