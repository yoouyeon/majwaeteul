const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;
let number;

rl.on("line", (line) => {
  if (!n) {
    n = parseInt(line.trim());
  } else {
    number = line.split(" ").map((num) => parseInt(num));
    rl.close();
  }
});

rl.on("close", () => {
  const sum = [new Array(n), new Array(n)]; // 0: 숫자 안빼기, 1: 숫자 하나 빼기
  sum[0][0] = number[0];
  sum[1][0] = number[0];
  for (let idx = 1; idx < n; idx++) {
    sum[0][idx] = Math.max(sum[0][idx - 1] + number[idx], number[idx]);
    sum[1][idx] = Math.max(sum[0][idx - 1], sum[1][idx - 1] + number[idx]);
  }
  console.log(Math.max(...sum.flat()));
});
