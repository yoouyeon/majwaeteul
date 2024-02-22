function solution1(s) {
  let zero = 0; // 총 제거되는 0의 개수
  let count = 0; // 총 이진변환의 횟수
  while (s !== "1") {
    const prevC = s.length;
    let removedZero = 0; // 이번 반복에서 제거될 0의 개수
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "0") {
        removedZero++;
      }
    }
    const c = prevC - removedZero; // 0이 제거된 s의 길이
    zero += removedZero;
    s = c.toString(2); // 2진법으로 표현한 문자열
    count++;
  }
  return [count, zero];
}

function solution2(s) {
  let zero = 0;
  let count = 0;
  while (s !== "1") {
    const prevLength = s.length;
    s = s.replaceAll("0", "");
    const currLength = s.length;
    zero += prevLength - currLength;
    s = s.length.toString(2);
    count++;
  }
  return [count, zero];
}
