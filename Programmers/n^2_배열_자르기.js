function solution(n, left, right) {
  let answer = [];
  for (let idx = left; idx <= right; idx++) {
    const y = Math.floor(idx / n);
    const x = idx % n;
    const element = Math.max(y, x) + 1;
    answer.push(element);
  }
  return answer;
}
