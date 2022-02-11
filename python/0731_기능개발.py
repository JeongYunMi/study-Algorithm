#기능개발
def solution(progresses, speeds):
    cnt = 0
    index = 0
    answer = []
    check = 1

    while progresses:
        if (100 - progresses[0]) % speeds[0] == 0:
            cnt +=(100 - progresses[0]) // speeds[0]
        else:
            cnt += (100 - progresses[0]) // speeds[0]+1

        for i in range(0, len(progresses)):
            print(i , progresses[i],  progresses[i] , (cnt*speeds[i]))

            progresses[i] = progresses[i] + (cnt*speeds[i])
            if progresses[i]>=100 and check == 1 :
                index+=1
            else:
                check = 0

        for _ in range(0,index):
            print(progresses.pop(0))
            speeds.pop(0)
        cnt = 0
        print(index)
        answer.append(index)
        index = 0
        check = 1

    return answer

"""
def solution(progresses, speeds):
    cnt = 1
    index = 0
    answer = []

    while progresses:
        progresses[index] = progresses[index] + speeds[index]
        print(progresses[index], progresses[index], speeds[index])

        if index+1>= len(progresses):
            index = 0
        else:
            index+=1

        if progresses[0]>=100:
            for i in progresses:
                print("i:",i)
                if i<100:
                    break
                print(progresses.pop(0))
                speeds.pop(0)
                cnt+=1
            answer.append(cnt)
            cnt=0

    return answer
    """

print(solution(	[95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]))