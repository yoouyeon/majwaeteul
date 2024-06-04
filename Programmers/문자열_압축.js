function solution(s) {
  let answer = 1000;
  // step 0. 문자열의 길이가 1인 경우 더 이상 압축할 수 없으므로 1을 반환
  if (s.length === 1) return 1;
  for (let subLength = 1; subLength <= Math.floor(s.length / 2); subLength++) {
    // step 1. 분할
    let startIdx = 0;
    const subStrArr = [];
    while (s.slice(startIdx, startIdx + subLength) !== "") {
      subStrArr.push(s.slice(startIdx, startIdx + subLength));
      startIdx += subLength;
    }
    // console.log(subStrArr);
    // step 2. 압축
    let currIdx = 0;
    let compressedStr = "";
    while (currIdx < subStrArr.length) {
      if (currIdx === subStrArr.length - 1) {
        compressedStr += subStrArr[currIdx];
        break;
      }
      let count = 1;
      while (
        currIdx < subStrArr.length - 1 &&
        subStrArr[currIdx] === subStrArr[currIdx + 1]
      ) {
        currIdx++;
        count++;
      }
      if (count == 1) {
        compressedStr += subStrArr[currIdx];
      } else {
        compressedStr += subStrArr[currIdx] + count.toString();
      }
      currIdx++;
    }
    // console.log(compressedStr);
    if (answer > compressedStr.length) answer = compressedStr.length;
  }
  return answer;
}
