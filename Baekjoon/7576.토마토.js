const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let M, N;
const tomatoMap = [];
const offsetY = [0, 1, 0, -1];
const offsetX = [1, 0, -1, 0];
let queueFront = 0;

rl.on("line", (line) => {
  if (!N) {
    [M, N] = line.split(" ").map((num) => parseInt(num));
  } else if (tomatoMap.length < N) {
    tomatoMap.push(line.split(" ").map((num) => parseInt(num)));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  let day = 0;
  let totalTomatos = 0;
  const queue = [];
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (tomatoMap[y][x] === 1) queue.push([y, x]);
      if (tomatoMap[y][x] !== -1) totalTomatos++;
    }
  }
  if (queue.length === totalTomatos) {
    console.log(day);
    return;
  }
  while (!checkTomatoMap()) {
    const queueSize = queue.length - queueFront;
    if (queueSize <= 0) {
      console.log(-1);
      return;
    }
    for (let temp = 0; temp < queueSize; temp++) {
      const [currentY, currentX] = shift(queue);
      for (let idx = 0; idx < offsetY.length; idx++) {
        const newPosY = currentY + offsetY[idx];
        const newPosX = currentX + offsetX[idx];
        if (
          newPosY < 0 ||
          newPosY >= N ||
          newPosX < 0 ||
          newPosX >= M ||
          tomatoMap[newPosY][newPosX] !== 0
        )
          continue;
        tomatoMap[newPosY][newPosX] = 1;
        queue.push([newPosY, newPosX]);
      }
    }
    day++;
  }
  console.log(day);
});

const checkTomatoMap = () => {
  for (let y = 0; y < N; y++) {
    for (let x = 0; x < M; x++) {
      if (tomatoMap[y][x] === 0) {
        return false;
      }
    }
  }
  return true;
};

const shift = (queue) => {
  return queue[queueFront++];
};
