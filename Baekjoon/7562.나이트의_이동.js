const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let t;
let tc = [];
let size, current, target; // 임시

const knightY = [-2, -1, 1, 2, 2, 1, -1, -2];
const knightX = [1, 2, 2, 1, -1, -2, -2, -1];

rl.on("line", (line) => {
  if (!t) {
    t = parseInt(line.trim());
  } else if (tc.length < t) {
    if (!size) size = parseInt(line.trim());
    else if (!current) current = line.split(" ").map((num) => parseInt(num));
    else {
      target = line.split(" ").map((num) => parseInt(num));
      tc.push({
        size,
        current,
        target,
      });
      size = undefined;
      current = undefined;
      target = undefined;
    }
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  for (testCase of tc) {
    solution(testCase);
  }
});

const solution = (testCase) => {
  const { size, current, target } = testCase;
  // 방문 확인 배열 만들기
  const checkVisit = new Array(size);
  for (let idx = 0; idx < size; idx++) {
    checkVisit[idx] = new Array(size).fill(false);
  }
  // bfs용 queue
  const queue = [];
  queue.push({ current, count: 0 });
  checkVisit[current[0]][current[1]] = true;
  // bfs
  while (queue.length !== 0) {
    const { current, count } = queue.shift();
    if (current[0] === target[0] && current[1] === target[1]) {
      console.log(count);
      return;
    }
    for (let idx = 0; idx < knightX.length; idx++) {
      const newPosY = current[0] + knightY[idx];
      const newPosX = current[1] + knightX[idx];
      if (
        newPosY < 0 ||
        newPosY >= size ||
        newPosX < 0 ||
        newPosX >= size ||
        checkVisit[newPosY][newPosX]
      )
        continue;
      checkVisit[newPosY][newPosX] = true;
      queue.push({
        current: [newPosY, newPosX],
        count: count + 1,
      });
    }
  }
};
