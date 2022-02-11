#오픈채팅방
def solution(record):
    answer = []
    record_split = []
    nickname_data = dict()
    for line in record:
        record_split.append(line.split(" "))

    for i in record_split:
        if i[0] == "Enter" or i[0] == "Change":
            nickname_data[i[1]] = i[2]

    for i in record_split:
        if i[0] == "Enter":
            answer.append(nickname_data[i[1]]+"님이 들어왔습니다.")
        elif i[0] == "Leave":
            answer.append(nickname_data[i[1]]+"님이 나갔습니다.")


    return answer

print(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"]))