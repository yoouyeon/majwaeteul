const priority = [
  ["+", "-", "*"],
  ["+", "*", "-"],
  ["-", "+", "*"],
  ["-", "*", "+"],
  ["*", "+", "-"],
  ["*", "-", "+"],
];

function calculator(numberA, numberB, operator) {
  // console.log("numberA", numberA, "numberB", numberB, "operator", operator);
  if (operator === "+") return numberA + numberB;
  if (operator === "-") return numberA - numberB;
  // operator === '*'
  return numberA * numberB;
}

function calculateExpression(numberArr, operatorArr, currPriority) {
  let priorityIdx = 0; // 현재 연산해야 하는 우선순위의 연산자 인덱스
  while (operatorArr.length !== 0) {
    let operatorIdx = 0;
    const currPriorityOperator = priority[currPriority][priorityIdx];
    // console.log("currPriorityOperator", currPriorityOperator)
    // 현재 연산해야 하는 우선순위의 연산자가 연산자 배열에 없는 경우
    if (operatorArr.indexOf(currPriorityOperator) === -1) {
      priorityIdx++;
    }
    while (operatorIdx < operatorArr.length) {
      const currOperator = operatorArr[operatorIdx];
      if (currPriorityOperator !== currOperator) {
        operatorIdx++;
        continue;
      }
      const numberIdx = operatorIdx;
      const result = calculator(
        numberArr[numberIdx],
        numberArr[numberIdx + 1],
        currOperator
      );
      numberArr.splice(numberIdx, 2, result);
      operatorArr.splice(operatorIdx, 1);
    }
    // console.log(numberArr, operatorArr)
  }
  return numberArr[0];
}

function solution(expression) {
  let answer = 0;
  // step 1. expression 파싱
  const numberArr = [];
  const operatorArr = [];
  let currNumber = "";
  for (char of expression) {
    const maybeNumber = parseInt(char);
    if (isNaN(maybeNumber)) {
      // operator
      operatorArr.push(char);
      numberArr.push(parseInt(currNumber));
      currNumber = "";
    } else {
      currNumber += char;
    }
  }
  numberArr.push(parseInt(currNumber));
  // console.log(num, operation);
  // step 2. 우선순위에 맞게 계산하기
  const answerArr = [];
  for (let currPriority = 0; currPriority < 6; currPriority++) {
    const result = calculateExpression(
      [...numberArr],
      [...operatorArr],
      currPriority
    );
    answerArr.push(Math.abs(result));
  }
  answerArr.sort((a, b) => b - a);
  answer = answerArr[0];
  return answer;
}
