const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let cnt;
let input = [];

rl.on("line", (line) => {
  if (!cnt) cnt = Number(line.trim());
  else
    input.push(
      line
        .trim()
        .split(" ")
        .map((el) => Number(el))
    );
  if (input.length >= cnt) rl.close();
});

rl.on("close", () => {
  const map = Array.from(Array(100), () => Array(100).fill(0));
  let answer = 0;
  input.forEach((input) => {
    const [startX, startY] = input;
    for (let i = startX; i < startX + 10; i++) {
      for (let j = startY; j < startY + 10; j++) {
        if (!map[i][j]) {
          map[i][j] = 1;
          answer++;
        }
      }
    }
  });
  console.log(answer);
});
