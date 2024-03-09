function getRanking(count) {
  switch (count) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;
    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  let answer = [];
  let unknownCnt = 0; // 알아볼 수 없는 숫자들 갯수
  let winCnt = 0; // 맞춘 숫자 갯수
  lottos.forEach((lotto) => {
    if (lotto === 0) {
      unknownCnt++;
      return;
    }
    if (win_nums.find((num) => num === lotto)) {
      winCnt++;
      return;
    }
  });
  // 최고 등수 => unknownCnt가 모두 맞았을 경우 = unknownCnt + winCnt만큼 맞췄을 경우
  answer.push(getRanking(winCnt + unknownCnt));
  // 최저 등수 => unknownCnt가 모두 맞지 않는 경우 = winCnt만큼만 맞췄을 경우
  answer.push(getRanking(winCnt));
  return answer;
}
