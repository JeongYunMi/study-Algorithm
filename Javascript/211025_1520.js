// 문제 해석: 미로가 주어지고 사용자는 0,0 위치에서 (M-1,N-1)위치까지 가야한다.
//           하좌우와 현재의 위치값보다 작은 값을 가진 칸으로만 이동할 수 있을 때 세준이가 (M-1,N-1) 위치까지 가는 경우의 수 출력
//풀이 아이디어
//1. 입력받고
//2. dfs구현하되, 목적지에 도달했으면 리턴 1
//3. 리턴 받은 1값을 더하여 출력

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let mn = input[0].split(" ").map((x) => +x); //미로의 세로크기, 가로크기
let maps = [];
var visited = Array.from(Array(mn[0]), () => Array(mn[1]).fill(-1));
let dx = [1, 0, -1, 0];
let dy = [0, 1, 0, -1];

for (let i = 1; i <= mn[0]; i++) {
  //세로줄 만큼 반복
  let mapLine = input[i].split(" ").map((x) => +x);
  maps.push(mapLine); // 숫자 배열로 전환
}

function dfsmove(x, y) {
  //console.log(visited);
  if (x === mn[1] - 1 && y === mn[0] - 1) {
    return 1; //목적지 도착
  }
  if (visited[y][x] === -1) {
    visited[y][x] = 0;
    for (let i = 0; i < 4; ++i) {
      let nextY = y + dy[i];
      let nextX = x + dx[i];
      if (
        nextX >= 0 &&
        nextX < mn[1] &&
        nextY < mn[0] &&
        nextY >= 0 &&
        maps[y][x] > maps[nextY][nextX]
      ) {
        visited[y][x] += dfsmove(nextX, nextY);
      }
    }
  }
  return visited[y][x];
}
ans = dfsmove(0, 0);
if (ans === 0) {
  console.log("0");
} else {
  console.log(ans);
}

/*
let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");

let mn = input[0].split(" ").map((x) => +x); //미로의 세로크기, 가로크기
let maps = [];
let count = 0;

var visited = Array.from(Array(mn[0]), () => Array(mn[1]).fill(0));

//console.log(visited);

for (let i = 1; i <= mn[0]; i++) {
  //세로줄 만큼 반복
  let mapLine = input[i].split(" ").map((x) => +x);
  maps.push(mapLine); // 숫자 배열로 전환
}

function dfsmove(x, y, now) {
  //console.log(x, y, now, mn[0]);

  console.log(visited);
  if (visited[y][x] !== 0) {
    return;
  }
  visited[y][x] = now;
  if (x === mn[1] - 1 && y === mn[0] - 1) {
    count += 1; //목적지 도달시 count 1추가
    return;
  } else {
    if (x + 1 < mn[1] && maps[y][x] > maps[y][x + 1]) {
      //우
      dfsmove(x + 1, y, now + 1);
    }
    if (x - 1 > -1 && maps[y][x] > maps[y][x - 1]) {
      //좌
      dfsmove(x - 1, y, now + 1);
    }
    if (y + 1 < mn[0] && maps[y][x] > maps[y + 1][x]) {
      //하
      dfsmove(x, y + 1, now + 1);
    }
    return;
  }
}
dfsmove(0, 0, 1);
console.log(count);
*/
