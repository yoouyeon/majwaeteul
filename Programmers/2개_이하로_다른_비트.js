function solution(numbers) {
  let answer = [];
  numbers.forEach((number) => {
    // 짝수인 경우 => 다음 홀수로 만들어주기
    if (number % 2 === 0) {
      answer.push(number + 1);
      return;
    }
    // 2진수로 변환후 배열로 만들기~
    const binaryNumber = ("0" + number.toString(2)).split(""); // 안전한 변환을 위한 0 추가
    const lastZeroIdx = binaryNumber.lastIndexOf("0");
    binaryNumber[lastZeroIdx] = "1";
    binaryNumber[lastZeroIdx + 1] = "0";
    // 2진수 -> 10진수는 parseInt
    answer.push(parseInt(binaryNumber.join(""), 2)); //이걸몰랐네;;
  });

  return answer;
}
