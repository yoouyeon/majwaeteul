const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;

rl.on("line", (line) => {
  N = Number(line.trim());
  rl.close();
});

rl.on("close", () => {
  const arr = new Array(N).fill(0).map((_, idx) => idx + 1);
  const result = [];
  while (arr.length) {
    result.push(arr.shift());
    if (arr.length) arr.push(arr.shift());
  }
  console.log(result.join(" "));
});
