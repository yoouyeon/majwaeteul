function solution(lottos, win_nums) {
  let answer = [];
  const ranking = [6, 6, 5, 4, 3, 2, 1]; // idx 만큼 맞추면 몇등인지
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
  answer.push(ranking[winCnt + unknownCnt]);
  // 최저 등수 => unknownCnt가 모두 맞지 않는 경우 = winCnt만큼만 맞췄을 경우
  answer.push(ranking[winCnt]);
  return answer;
}
