// 문제해석
// N개의 숫자로 구분된 각각의 마을에 한 명의 학생씩 살고 있고, M개의 단방향 도로가 있을 때,
// 각각의 학생 중 자신의 마을에서부터 X번 마을을 찍고 다시 돌아오는 최솟값이 가장 큰 친구의 시간소비 값을 구하라
// 풀이아이디어
// 1. 자기 자신의 집인 학생을 제외하고(사실 마을 기준으로 카운트하면 될 것 같다.) 각 마을에서 목적지  마을로 가는 최솟값 구하기 → 다익스트라
// 2. 목적지 마을에서 각 마을로 가는 최솟값 구하기
// 3. 1번 값과 2번 값을 더한 후 최댓값 출력

let fs = require("fs");
let input = fs.readFileSync("현재예제.txt").toString().split("\n");
let nmx = input[0].split(" ").map((x) => +x); //n: 마을 수    m: 단방향도로   x: 목적지 마을 번호
let maps = Array.from({ length: nmx[0] + 1 }, () => Array()); // 거리 정보를 받을 변수
let distance = Array.from(
  { length: nmx[0] + 1 },
  () => Number.MAX_SAFE_INTEGER
); // 각각의 최소 거리 테이블을 가질 변수
let resultDistance = Array.from(
  { length: nmx[0] + 1 },
  () => Number.MAX_SAFE_INTEGER
); // 모든학생이 마을을 오가는 최소 거리 테이블을 가질 변수

for (let i = 1; i <= nmx[1]; i++) {
  //간선의 수 만큼 반복
  let mapLine = input[i].split(" ").map((x) => +x);
  maps[mapLine[0]].push([mapLine[1], mapLine[2]]); // 숫자 배열로 전환
}

function dijkstra1(start) {
  let pq = [];
  pq.push([0, start]); // 첫시작 위치 start, start까지 가기위한 비용 0
  distance.fill(Number.MAX_SAFE_INTEGER);
  distance[start] = 0;
  while (pq.length) {
    let temp = pq.pop(0);
    let dist = temp[0]; //비용
    let now = temp[1]; //위치

    if (distance[now] < dist) {
      // 앞서 작성된 도착까지 걸리는 비용이 현재 비용보다 작을 경우 무시
      continue;
    }

    maps[now].forEach((e) => {
      //시작위치, 비용
      let cost = dist + e[1];
      if (cost < distance[e[0]]) {
        distance[e[0]] = cost;
        let num = pq.findIndex((q) => {
          //비용 시작위치
          q[0] < cost;
        });

        if (num !== -1) {
          pq.splice(num, 0, [cost, e[0]]);
        } else {
          pq.splice(0, 0, [cost, e[0]]);
        }
      }
    });
  }
  //console.log("distance   ", start, distance);
  return distance[nmx[2]];
}

function dijkstra2(start) {
  let pq = [];
  pq.push([0, start]); // 첫시작 위치 start, start까지 가기위한 비용 0
  resultDistance[start] = 0;
  while (pq.length) {
    let temp = pq.pop(0);
    let dist = temp[0]; //비용
    let now = temp[1]; //위치

    if (resultDistance[now] < dist) {
      // 앞서 작성된 도착까지 걸리는 비용이 현재 비용보다 작을 경우 무시
      continue;
    }

    maps[now].forEach((e) => {
      //시작위치, 비용
      let cost = dist + e[1];
      if (cost < resultDistance[e[0]]) {
        resultDistance[e[0]] = cost;
        let num = pq.findIndex((q) => {
          //비용 시작위치
          q[0] < cost;
        });

        if (num !== -1) {
          pq.splice(num, 0, [cost, e[0]]);
        } else {
          pq.splice(0, 0, [cost, e[0]]);
        }
      }
    });
  }
  //console.log("res", resultDistance);
}

dijkstra2(nmx[2]);

for (let st = 1; st <= nmx[0]; st++) {
  if (st === nmx[2]) {
    continue;
  }
  resultDistance[st] += dijkstra1(st);
}

//console.log("결과 ", resultDistance);

resultDistance[nmx[2]] = 0;
let temp = resultDistance[1];

for (let j = 2; j <= resultDistance.length; j++) {
  if (temp < resultDistance[j]) {
    temp = resultDistance[j];
  }
}

console.log(temp);
