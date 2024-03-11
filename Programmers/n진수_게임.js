// 변수 네이밍이 너무 맘에 안들어서 고침,,
function solution(base, numberCnt, memberCnt, tube) {
  let answer = "";
  const preNumberMinCnt = memberCnt * (numberCnt - 1) + tube; // 답을 구하기 위해 구해야 하는 최소 숫자의 수
  let preNumberString = ""; // 변환된 숫자들이 이어져있는 문자열
  let currNumber = 0; // 변환할 숫자
  while (preNumberString.length < preNumberMinCnt) {
    const currNumberArray = currNumber.toString(base);
    preNumberString = preNumberString + currNumberArray;
    currNumber++;
  }
  // console.log(preNumberString)
  while (answer.length < numberCnt) {
    const tubeNumber = preNumberString[answer.length * memberCnt + tube - 1];
    if (Number.isNaN(Number(tubeNumber)))
      answer += tubeNumber.toUpperCase(); // 문자인 경우에는 대문자로 바꿔준다.
    else answer += tubeNumber;
  }

  return answer;
}
