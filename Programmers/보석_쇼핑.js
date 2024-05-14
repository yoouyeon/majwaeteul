function solution(gems) {
  const gemCount = new Set(gems).size;
  let answer = [1, gems.length];

  let left = 0;
  let right = 0;

  const gemMap = new Map();
  gemMap.set(gems[0], 1);

  while (right < gems.length) {
    if (gemMap.size === gemCount) {
      // 모든 보석을 모았으니 답을 구하자!
      if (right - left < answer[1] - answer[0]) answer = [left + 1, right + 1];
      // gemMap에서 가장 왼쪽 보석 빼기
      const leftGemCount = gemMap.get(gems[left]) - 1;
      if (leftGemCount === 0) gemMap.delete(gems[left]);
      else gemMap.set(gems[left], leftGemCount);
      left++;
    } else {
      // 오른쪽 커서를 증가시키면서 새로운 보석 넣기
      right++;
      const rightGemCount = gemMap.get(gems[right]);
      gemMap.set(gems[right], rightGemCount ? rightGemCount + 1 : 1);
    }
  }

  return answer;
}
