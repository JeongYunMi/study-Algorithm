# 해결 아이디어
# 모든 경우를 재귀함수로 구현

# dfs 풀이 효율성 실패
"""
import copy

def dfs(maps, y, x, goal_y, goal_x, cnt, result):
    for i in maps:
        print(i)
    print()

    if y == goal_y and x == goal_x:
        result.append(cnt)
        print(cnt)
        return cnt

    else:
        map = copy.deepcopy(maps)
        map[y][x] = 0

        if x+1 <= goal_x and map[y][x+1] == 1:
            dfs(map, y, x+1, goal_y, goal_x, cnt+1, result)
        if y+1 <= goal_y and map[y+1][x] == 1:
            dfs(map, y+1, x, goal_y, goal_x, cnt+1, result)
        if y-1 >= 0 and map[y-1][x] == 1:
            dfs(map, y-1, x, goal_y, goal_x, cnt+1, result)
        if x-1 >= 0 and map[y][x-1] == 1:
            dfs(map, y, x-1, goal_y, goal_x, cnt+1, result)


def solution(maps):
    answer = []
    goal_x = 0
    for i in maps:
        goal_x = len(i)-1
        break
    dfs(maps, 0, 0, len(maps)-1, goal_x, 1, answer)
    if answer == []:
        return -1
    else:
        return min(answer)
"""

#bfs구현
from collections import deque

# BFS 소스코드 구현
def bfs(maps, x, y, goal_x, goal_y):
    # 큐(Queue) 구현을 위해 deque 라이브러리 사용
    queue = deque()
    queue.append((x, y))
    maps[goal_x][goal_y] = -2
    dx = [-1, 1, 0, 0]
    dy = [0, 0, -1, 1]
    # 큐가 빌 때까지 반복하기
    while queue:
        x, y = queue.popleft()
        for i in maps:
            print(i)
        print()
        # 현재 위치에서 4가지 방향으로의 위치 확인
        for i in range(4):
            nx = x + dx[i]
            ny = y + dy[i]
            # 미로 찾기 공간을 벗어난 경우 무시
            if nx < 0 or nx > goal_x or ny < 0 or ny > goal_y:
                continue
            # 벽인 경우 무시
            if maps[nx][ny] == 0:
                continue
            # 해당 노드를 처음 방문하는 경우에만 최단 거리 기록
            if maps[nx][ny] == 1 or maps[nx][ny] == -2:
                maps[nx][ny] = maps[x][y] + 1
                queue.append((nx, ny))
    # 가장 오른쪽 아래까지의 최단 거리 반환
    return maps[goal_x][goal_y]


def solution(maps):
    goal_x = 0
    for i in maps:
        goal_x = len(i)-1
        break
    answer = bfs(maps, 0, 0, len(maps)-1, goal_x)
    if answer == -2:
        return -1
    else:
        return answer


print(solution([[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]))