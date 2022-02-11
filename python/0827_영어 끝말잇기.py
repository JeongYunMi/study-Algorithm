def solution(n, words):
    answer = [0,0]
    turn = 0

    temp = words[0][len(words[0])-1]
    for i in range(1, len(words)):
        if not words[i][0] == temp:
            turn = i+1
            break
        if words[i] in words[:i]:
            turn = i+1
            break
        temp = words[i][len(words[i])-1]

    if turn == 0:
        pass
    else:
        if turn%n == 0:
            answer = [n,turn//n]
        else:
            answer = [ turn%n, turn//n+1]


    return answer

print(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))