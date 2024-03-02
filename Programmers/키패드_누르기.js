const position = {
  1: [0, 0],
  2: [0, 1],
  3: [0, 2],
  4: [1, 0],
  5: [1, 1],
  6: [1, 2],
  7: [2, 0],
  8: [2, 1],
  9: [2, 2],
  "*": [3, 0],
  0: [3, 1],
  "#": [3, 2],
};

const distance = (pos1, pos2) => {
  const [r1, c1] = pos1;
  const [r2, c2] = pos2;
  return Math.abs(r1 - r2, 2) + Math.abs(c1 - c2, 2);
};

function solution(numbers, hand) {
  const answer = [];
  let left = position["*"];
  let right = position["#"];
  numbers.forEach((num) => {
    if (num === 1 || num === 4 || num === 7) {
      left = position[num];
      answer.push("L");
    } else if (num === 3 || num == 6 || num === 9) {
      right = position[num];
      answer.push("R");
    } else {
      const leftDistance = distance(left, position[num]);
      const rightDistance = distance(right, position[num]);
      if (
        leftDistance < rightDistance ||
        (leftDistance === rightDistance && hand === "left")
      ) {
        left = position[num];
        answer.push("L");
      } else {
        right = position[num];
        answer.push("R");
      }
    }
  });
  return answer.join("");
}
