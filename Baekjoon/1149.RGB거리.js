const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
const cost = [];

rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line.trim());
  } else if (cost.length < N) {
    cost.push(line.split(" ").map((num) => parseInt(num)));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  for (let idx = 1; idx < N; idx++) {
    cost[idx][0] += Math.min(cost[idx - 1][1], cost[idx - 1][2]);
    cost[idx][1] += Math.min(cost[idx - 1][0], cost[idx - 1][2]);
    cost[idx][2] += Math.min(cost[idx - 1][0], cost[idx - 1][1]);
  }
  console.log(Math.min(...cost[N - 1]));
});
