const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, K;

rl.on("line", (line) => {
  [N, K] = line
    .trim()
    .split(" ")
    .map((el) => Number(el));
  rl.close();
});

rl.on("close", () => {
  const arr = new Array(N + 1).fill(false);
  let cnt = 0;

  for (let idx = 2; idx <= N; idx++) {
    if (!arr[idx]) {
      for (let num = 1; num * idx <= N; num++) {
        const target = num * idx;
        if (!arr[target]) {
          arr[target] = true;
          cnt++;
          if (cnt === K) {
            console.log(target);
            return;
          }
        }
      }
    }
  }
});
