function checkStone(stones, mid, k) {
  let zero = 0;
  for (stone of stones) {
    if (stone - mid <= 0) zero++; // 0이 되는 경우 증가
    else zero = 0; // 만약에 0이 안될경우 초기화
    if (zero >= k) return true; // 만약에 연속된 0이 K 이상인 경우 더이상 못감
  }
  return false; // 그 외엔 가능
}

function solution(stones, k) {
  let left = 0;
  let right = 200000000;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (checkStone(stones, mid, k))
      right = mid - 1; // 더 이상 못가는 경우에는 아래 범위를 재탐색
    else left = mid + 1; // 그 외에는 위 범위를 재탐색
  }
  return left; // 답은 왼쪽
}
