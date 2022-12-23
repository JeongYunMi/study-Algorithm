#N개의 최소공배수
def GCD(x,y):
    while(y): # y가 참일 동안 = 자연수일 때 = a%b != 0
        x, y = y, x%y
    return x

def LCM(x,y):
    result = (x*y)//GCD(x,y)
    return result

def solution(arr):
    now = LCM(arr.pop(0), arr.pop(0))
    for i in range(0, len(arr)):
        now = LCM(now, arr[i])

    return now

print(solution([1,2,3]))