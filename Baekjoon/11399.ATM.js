const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, P;

rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line.trim());
  } else if (!P) {
    P = line.split(" ").map((time) => parseInt(time));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  // 돈을 빨리 뽑을 수 있는 사람은 먼저 뽑고 줄을 빠져나가기
  P.sort((a, b) => a - b);
  console.log(P.reduce((acc, cur, idx) => acc + cur * (P.length - idx), 0));
});
