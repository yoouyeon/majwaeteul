const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, B;

rl.on("line", (line) => {
  [N, B] = line.split(" ").map((num) => parseInt(num));
  rl.close();
});

rl.on("close", () => {
  const answer = [];
  while (N) {
    const currPos = convertNum(N % B);
    answer.push(currPos);
    N = Math.floor(N / B);
  }
  console.log(answer.reverse().join(""));
});

const convertNum = (num) => {
  if (num >= 0 && num <= 9) return num;
  return String.fromCharCode("A".charCodeAt(0) + num - 10);
};
