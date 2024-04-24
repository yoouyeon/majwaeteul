const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const paper = [];
const answer = [0, 0]; // 0: 흰색, 1: 파란색

rl.on("line", (line) => {
  input = line;
  if (!N) {
    N = parseInt(input.trim());
  } else if (paper.length < N) {
    paper.push(input.split(" ").map((el) => parseInt(el)));
  }
  if (paper.length === N) {
    rl.close();
  }
});

rl.on("close", () => {
  cutPaper(0, 0, N);
  console.log(answer[0]);
  console.log(answer[1]);
});

const cutPaper = (startX, startY, size) => {
  if (checkAllSame(startX, startY, size)) {
    answer[paper[startX][startY]]++;
  } else {
    const newSize = size / 2;
    cutPaper(startX, startY, newSize);
    cutPaper(startX + newSize, startY, newSize);
    cutPaper(startX, startY + newSize, newSize);
    cutPaper(startX + newSize, startY + newSize, newSize);
  }
};

const checkAllSame = (startX, startY, size) => {
  const color = paper[startX][startY];
  for (let i = startX; i < startX + size; i++) {
    for (let j = startY; j < startY + size; j++) {
      if (paper[i][j] !== color) {
        return false;
      }
    }
  }
  return true;
};
