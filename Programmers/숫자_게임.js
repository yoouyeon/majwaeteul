const descCmp = (a, b) => b - a;

function solution(A, B) {
  let answer = 0;
  A.sort(descCmp);
  B.sort(descCmp);
  let aIdx = 0;
  let bIdx = 0;
  while (aIdx < A.length && bIdx < B.length) {
    if (A[aIdx] < B[bIdx]) {
      // 해치웠다
      aIdx++;
      bIdx++;
      answer++;
    } else {
      // 넘어가자
      aIdx++;
    }
  }
  return answer;
}
