function solution(N, stages) {
  // 각 스테이지에 도달한 유저
  const stageArray = new Array(N).fill(0);
  // 각 스테이지에 현재 도전중인 유저 = 스테이지에 도달했으나 클리어하지 못한 유저
  const currentStageArray = new Array(N).fill(0);

  // 1. stageArray, currentStageArray 채워주기 => 더 좋은 방법이 없을까...
  stages.forEach((curr) => {
    const stageIndex = curr - 1; // 1번 스테이지 => 0번 인덱스
    for (let idx = 0; idx < stageIndex; idx++) {
      stageArray[idx]++;
    }
    currentStageArray[stageIndex]++;
  });

  // 2. 실패율 구해서 배열로 만들기~
  let answerData = new Array(N);
  for (let idx = 0; idx < answerData.length; idx++) {
    answerData[idx] = {
      num: idx + 1,
      fail: currentStageArray[idx] / stageArray[idx],
    };
  }
  // 3. 정렬....
  answerData.sort((a, b) => {
    if (a.fail === b.fail) return a.num - b.num;
    return b.fail - a.fail;
  });
  // 4. 정답 배열 만들기!
  return Array.from(answerData, (data) => data.num);
}
