function solution(nums) {
  const ponketmonSet = new Set(nums);
  const half = nums.length / 2;
  // 폰켓몬 종류의 수 보다 N/2가 더 작다면 최대 N/2종류의 폰켓몬을 고를 수 있음
  // 폰켓몬 종류의 수 보다 N/2가 더 크다면 모든 폰켓몬을 최소 1개씩 고르는 방법이 가장 많은 종류의 폰켓몬을 선택하는 방법
  const answer = ponketmonSet.size > half ? half : ponketmonSet.size;
  return answer;
}
