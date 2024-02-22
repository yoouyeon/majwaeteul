const bracket = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function isRightBracket(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];
    if (curr === "{" || curr === "[" || curr === "(") stack.push(curr);
    else {
      const top = stack.pop();
      if (curr !== bracket[top]) return false;
    }
  }
  return stack.length === 0; // 짝이 맞지 않는 경우는 올바른 괄호가 아니다.
}

function solution(s) {
  let answer = 0;
  const stringArr = s.split("");
  for (let i = 0; i < stringArr.length; i++) {
    if (isRightBracket(stringArr)) answer++;
    // rotate
    stringArr.push(stringArr.shift());
  }
  return answer;
}
