const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, B;

rl.on("line", (line) => {
  [N, B] = line.split(" ");
  rl.close();
});

rl.on("close", () => {
  const NArray = N.split("");
  let answer = 0;
  for (char of NArray) {
    const num = convertNumber(char);
    answer = answer * B + num;
  }
  console.log(answer);
});

const convertNumber = (char) => {
  const maybeNumber = parseInt(char);
  if (!isNaN(maybeNumber)) return maybeNumber;
  return char.charCodeAt(0) - "A".charCodeAt(0) + 10;
};
