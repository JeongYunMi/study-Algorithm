let fs = require("fs");
let input = fs.readFileSync("./현재예제.txt").toString().trim().split("\n");

let n = input[0].split(" ").map((x) => +x); //도시의 수
let cost = input[1].split(" ").map((x) => +x);

let maps = [];

for (let i = 2; i < Number(n) + 2; i++) {
  let mapLine = [];
  for (let j = 0; j < n; ++j) {
    mapLine.push(+input[i][j]);
  }
  maps.push(mapLine); // 숫자 배열로 전환
}

console.log(cost, maps);

// function dfsmove(x, y) {
//   //console.log(visited);
//   if (x === mn[1] - 1 && y === mn[0] - 1) {
//     return 1; //목적지 도착
//   }
//   if (visited[y][x] === -1) {
//     visited[y][x] = 0;
//     for (let i = 0; i < 4; ++i) {
//       let nextY = y + dy[i];
//       let nextX = x + dx[i];
//       if (
//         nextX >= 0 &&
//         nextX < mn[1] &&
//         nextY < mn[0] &&
//         nextY >= 0 &&
//         maps[y][x] > maps[nextY][nextX]
//       ) {
//         visited[y][x] += dfsmove(nextX, nextY);
//       }
//     }
//   }
//   return visited[y][x];
// }
// ans = dfsmove(0, 0);
// if (ans === 0) {
//   console.log("0");
// } else {
//   console.log(ans);
// }
