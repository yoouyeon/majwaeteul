const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M, K;
const arr = [];
const input = [];

rl.on("line", (line) => {
  if (!N && !M)
    [N, M] = line
      .trim()
      .split(" ")
      .map((el) => Number(el));
  else if (arr.length < N)
    arr.push(
      line
        .trim()
        .split(" ")
        .map((el) => Number(el))
    );
  else if (!K) K = Number(line.trim());
  else
    input.push(
      line
        .trim()
        .split(" ")
        .map((el) => Number(el))
    );
  if (input.length === K) rl.close();
});

rl.on("close", () => {
  input.forEach(([i, j, x, y]) => {
    let sum = 0;
    for (let row = i - 1; row < x; row++) {
      for (let col = j - 1; col < y; col++) {
        sum += arr[row][col];
      }
    }
    console.log(sum);
  });
});
