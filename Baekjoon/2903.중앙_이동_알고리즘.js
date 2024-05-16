const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

rl.on("line", (line) => {
  N = parseInt(line.trim());
  rl.close();
});

rl.on("close", () => {
  console.log(Math.pow(Math.pow(2, N) + 1, 2));
});
