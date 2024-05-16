const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let T;
const TC = [];
const QUARTER = 25;
const DIME = 10;
const NICKEL = 5;
const PENNY = 1;

rl.on("line", (line) => {
  if (!T) {
    T = parseInt(line.trim());
  } else if (TC.length < T) {
    TC.push(parseInt(line.trim()));
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  const answers = [];
  for (let cnt = 0; cnt < T; cnt++) {
    answers.push([]);
    let currentC = TC[cnt];
    answers[cnt].push(Math.floor(currentC / QUARTER));
    currentC %= QUARTER;
    answers[cnt].push(Math.floor(currentC / DIME));
    currentC %= DIME;
    answers[cnt].push(Math.floor(currentC / NICKEL));
    currentC %= NICKEL;
    answers[cnt].push(Math.floor(currentC / PENNY));
    currentC %= PENNY;
  }
  answers.forEach((answer) => {
    console.log(answer[0], answer[1], answer[2], answer[3]);
  });
});
