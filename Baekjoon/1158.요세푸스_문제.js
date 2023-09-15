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
  const queue = Array(N);
  for (let i = 0; i < N; i++) {
    queue[i] = i + 1;
  }

  const answer = [];
  while (answer.length !== N) {
    for (let i = 1; i < K; i++) {
      queue.push(queue.shift());
    }
    answer.push(queue.shift());
  }

  console.log(`<${answer.join(", ")}>`);
});
