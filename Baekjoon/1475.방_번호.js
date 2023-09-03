const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on("line", (line) => {
  input = line;
  rl.close();
});

rl.on("close", () => {
  const numArr = input.split("").map((el) => Number(el));
  const countArr = Array(10).fill(0);

  numArr.forEach((num) => {
    if (num === 6 || num === 9) {
      // 6과 9는 같은 숫자로 취급할 수 있으므로
      // 6 인덱스를 0.5(한 세트로 2개를 만들 수 있다.)증가시킴
      countArr[6] += 0.5;
    } else countArr[num] += 1;
  });

  console.log(Math.ceil(Math.max(...countArr)));
});
