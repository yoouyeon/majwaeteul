const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const input = [];

rl.on("line", (line) => {
  if (!N) N = Number(line.trim());
  else input.push(line.trim().split(""));
  if (input.length === N) rl.close();
});

rl.on("close", () => {
  let rowCnt = 0;
  let colCnt = 0;

  // 가로, 세로 정보 만들기
  const row = [];
  const col = [];
  for (let i = 0; i < N; i++) {
    row.push(input[i].join(""));
    col.push(input.map((row) => row[i]).join(""));
  }

  // 빈칸 개수 세기
  for (let r = 0; r < N; r++) {
    const currRow = row[r].split("X");
    const currCol = col[r].split("X");
    currRow.forEach((empty) => empty.length >= 2 && rowCnt++);
    currCol.forEach((empty) => empty.length >= 2 && colCnt++);
  }

  console.log(rowCnt, colCnt);
});
