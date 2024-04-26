const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M;
const A = [];
const B = [];

rl.on("line", (line) => {
  if (!N && !M) {
    [N, M] = line.split(" ").map((num) => parseInt(num));
  } else if (A.length < N) {
    A.push(line.split("").map((num) => !!parseInt(num)));
  } else if (B.length < N) {
    B.push(line.split("").map((num) => !!parseInt(num)));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  if (checkAnswer(A, B)) {
    console.log(0);
    return;
  }
  if (M < 3 || N < 3) {
    console.log(-1);
    return;
  }
  let count = 0;
  for (let r = 0; r <= N - 3; r++) {
    for (let c = 0; c <= M - 3; c++) {
      if (needFilp(A, B, r, c)) {
        count++;
        flip(A, r, c);
      }
    }
  }
  if (checkAnswer(A, B)) console.log(count);
  else console.log(-1);
});

const flip = (matrix, startRow, startCol) => {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      matrix[startRow + r][startCol + c] = !matrix[startRow + r][startCol + c];
    }
  }
};

const needFilp = (matrixA, matrixB, startRow, startCol) => {
  return matrixA[startRow][startCol] !== matrixB[startRow][startCol];
};

const checkAnswer = (matrixA, matrixB) => {
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < M; c++) {
      if (matrixA[r][c] !== matrixB[r][c]) return false;
    }
  }
  return true;
};
