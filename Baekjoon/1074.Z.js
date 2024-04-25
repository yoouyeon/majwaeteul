const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N,
  r,
  c,
  count = 0;

rl.on("line", (line) => {
  input = line;
  [N, r, c] = input.split(" ");
  rl.close();
});

rl.on("close", () => {
  visit(0, 0, Math.pow(2, N));
});

const visit = (curCol, curRow, size) => {
  if (c >= curCol + size || r >= curRow + size) {
    // 현재 위치가 타겟 위치의 범위 밖인 경우 => 쪼갤 필요가 없음
    count += size * size;
    return;
  }
  if (curCol == c && curRow == r) {
    // 정답이다!
    console.log(count);
    process.exit();
  }
  const newSize = size / 2;
  if (newSize < 1) return;
  visit(curCol, curRow, newSize);
  visit(curCol + newSize, curRow, newSize);
  visit(curCol, curRow + newSize, newSize);
  visit(curCol + newSize, curRow + newSize, newSize);
};
