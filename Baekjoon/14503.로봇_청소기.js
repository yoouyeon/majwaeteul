const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
let r, c, d;
let map = [];

rl.on("line", (line) => {
  if (!N) {
    [N, M] = line
      .trim()
      .split(" ")
      .map((el) => Number(el));
  } else if (!r) {
    [r, c, d] = line
      .trim()
      .split(" ")
      .map((el) => Number(el));
  } else {
    map.push(
      line
        .trim()
        .split(" ")
        .map((el) => Number(el))
    );
  }
  if (N && map.length === N) rl.close();
});

const isCleaned = (r, c) => {
  return map[r][c] === -1;
};

const isValidPos = (r, c) => {
  return r >= 0 && r < N && c >= 0 && c < M;
};

const isWall = (r, c) => {
  return map[r][c] === 1;
};

rl.on("close", () => {
  // 방향 정리 (북, 동, 남, 서)
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];
  let cnt = 0;
  while (true) {
    // 1. 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
    if (!isCleaned(r, c)) {
      map[r][c] = -1;
      cnt++;
    }
    // 2. 현재 칸의 주변 칸을 탐색한다.
    let isCleanedAround = true;
    for (let d = 0; d < 4; d++) {
      const nr = r + dy[d];
      const nc = c + dx[d];
      if (isValidPos(nr, nc) && !isWall(nr, nc) && !isCleaned(nr, nc)) {
        isCleanedAround = false;
        break;
      }
    }
    // 3. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우,
    if (isCleanedAround) {
      const nr = r - dy[d];
      const nc = c - dx[d];
      // 3-1. 후진할 수 있는 경우, 후진한다.
      if (isValidPos(nr, nc) && !isWall(nr, nc)) {
        r = nr;
        c = nc;
      } else {
        // 3-2. 후진할 수 없는 경우, 작동을 멈춘다.
        break;
      }
    } else {
      // 4. 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우,
      while (true) {
        // 4-1. 반시계방향으로 90도 회전한다.
        d = (d + 3) % 4;
        const nr = r + dy[d];
        const nc = c + dx[d];
        // 4-2. 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
        if (isValidPos(nr, nc) && !isWall(nr, nc) && !isCleaned(nr, nc)) {
          r = nr;
          c = nc;
          break;
        }
        // 4-3. 청소된 칸이거나 벽인 경우, 4-1로 돌아간다.
      }
    }
  }
  console.log(cnt);
});
