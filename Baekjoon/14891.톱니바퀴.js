const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let K;

const gear = []; // 전체 톱니바퀴의 정보
const rotateInfo = []; // 회전 정보

rl.on("line", (line) => {
  if (gear.length < 4) {
    gear.push(
      line
        .trim()
        .split("")
        .map((el) => Number(el))
    );
  } else if (!K) K = Number(line.trim());
  else
    rotateInfo.push(
      line
        .trim()
        .split(" ")
        .map((el) => Number(el))
    );
  if (gear.length === 4 && K && rotateInfo.length === K) rl.close();
});

// 이번 회전에서 모든 톱니바퀴의 회전 방향 결정
const getNewRotateInfo = (gearNum, currRotate, propagateFrom) => {
  const leftIdx = 6;
  const rightIdx = 2;
  if (propagateFrom === 1) {
    // 왼쪽 톱니바퀴에 따라 현재 톱니바퀴의 회전 여부 결정
    if (gear[gearNum][leftIdx] === gear[gearNum - 1][rightIdx]) {
      // 극이 같으면 회전하지 않는다.
      currRotate[gearNum] = 0;
    } else {
      // 극이 다르면 반대 방향으로 회전한다.
      // (왼쪽 톱니바퀴가 회전하지 않으면 오른쪽 톱니바퀴도 회전하지 않는다.)
      currRotate[gearNum] = currRotate[gearNum - 1] * -1;
    }
    // 가능한 경우 오른쪽으로 propagate
    gearNum + 1 < 4 && getNewRotateInfo(gearNum + 1, currRotate, 1);
    return;
  } else if (propagateFrom === -1) {
    // 오른쪽 톱니바퀴에 따라 현재 톱니바퀴의 회전 여부 결정
    if (gear[gearNum][rightIdx] === gear[gearNum + 1][leftIdx]) {
      // 극이 같으면 회전하지 않는다.
      currRotate[gearNum] = 0;
    } else {
      // 극이 다르면 반대 방향으로 회전한다.
      // (오른쪽 톱니바퀴가 회전하지 않으면 왼쪽 톱니바퀴도 회전하지 않는다.)
      currRotate[gearNum] = currRotate[gearNum + 1] * -1;
    }
    // 가능한 경우 왼쪽으로 propagate
    gearNum - 1 >= 0 && getNewRotateInfo(gearNum - 1, currRotate, -1);
  } else {
    // 가능한 양쪽으로 propagate
    gearNum + 1 < 4 && getNewRotateInfo(gearNum + 1, currRotate, 1);
    gearNum - 1 >= 0 && getNewRotateInfo(gearNum - 1, currRotate, -1);
    return;
  }
};

// 새로 만들어진 회전 정보에 따라 톱니바퀴 회전
const rotate = (currRotate) => {
  for (let i = 0; i < 4; i++) {
    if (currRotate[i] === 1) {
      // 시계 방향 회전
      const last = gear[i].pop();
      gear[i].unshift(last);
    } else if (currRotate[i] === -1) {
      // 반시계 방향 회전
      const first = gear[i].shift();
      gear[i].push(first);
    }
  }
};

rl.on("close", () => {
  // 회전
  for (let i = 0; i < K; i++) {
    const currRotate = new Array(4).fill(0);
    const [rotateGear, rotateDir] = rotateInfo[i];
    currRotate[rotateGear - 1] = rotateDir;
    getNewRotateInfo(rotateGear - 1, currRotate, 0);
    rotate(currRotate);
  }
  // 점수 계산
  const northIdx = 0;
  const answer = gear.reduce((acc, curr, idx) => {
    return acc + curr[northIdx] * Math.pow(2, idx);
  }, 0);
  console.log(answer);
});
