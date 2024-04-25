const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

rl.on("line", (line) => {
  input = line;
  N = parseInt(input.trim());
  rl.close();
});

let answer;

rl.on("close", () => {
  answer = makeEmptyAnswer(N);
  makePattern(0, 0, N);
  for (let i = 0; i < answer.length; i++) {
    console.log(answer[i].join(""));
  }
});

const makeEmptyAnswer = (size) => {
  let ret = new Array(size).fill(" ");
  for (let i = 0; i < size; i++) {
    ret[i] = new Array(size).fill(" ");
  }
  return ret;
};

const makePattern = (x, y, size) => {
  if (size === 3) {
    answer[x][y] = "*";
    answer[x][y + 1] = "*";
    answer[x][y + 2] = "*";
    answer[x + 1][y] = "*";
    answer[x + 1][y + 2] = "*";
    answer[x + 2][y] = "*";
    answer[x + 2][y + 1] = "*";
    answer[x + 2][y + 2] = "*";
    return;
  }
  const newSize = size / 3;
  makePattern(x, y, newSize);
  makePattern(x, y + newSize, newSize);
  makePattern(x, y + newSize * 2, newSize);
  makePattern(x + newSize, y, newSize);
  makePattern(x + newSize, y + newSize * 2, newSize);
  makePattern(x + newSize * 2, y, newSize);
  makePattern(x + newSize * 2, y + newSize, newSize);
  makePattern(x + newSize * 2, y + newSize * 2, newSize);
};
