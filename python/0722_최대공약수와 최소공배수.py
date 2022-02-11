# n, m 각각 나눠지는 수 판별
# 교집합 처리
# 그중 가장 큰 값을 출력 -> 최대공약수
# 가장

def solution(n, m):
    data1 = set([])
    data2 = set([])
    maxNum = 0
    if n>m:
        maxNum = n
    else:
        maxNum = m
    for i in range(2, maxNum+1):
        if n % i == 0:
            data1.add(i)
        if m % i == 0:
            data2.add(i)

    gcd = list(set.intersection(data1, data2))
    gcd.sort(reverse=True)
    lcm = 0
    for i in range(maxNum, n*m+1):
        if i%n == 0 and i%m == 0:
            lcm = i
            break

    if gcd == []:
        answer = [1, lcm]
    else:
        answer = [gcd[0], lcm]

    return answer

print(solution(54, 32))

 ## 유클리드 호제법??
def GCD(x,y):
    while(y): # y가 참일 동안 = 자연수일 때 = a%b != 0
        x, y = y, x%y
    return x

print(GCD(10,12))

def LCM(x,y):
    result = (x*y)//GCD(x,y)
    return result

print(LCM(10,12))
