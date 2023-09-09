function solution(input_string) {
  // 연속되어있는 알파벳들 제거하기 (edeaaabbccd -> edeabcd)
  const unique_string = input_string.split("").reduce((acc, cur, idx) => {
    if (idx === 0) return acc + cur;
    if (input_string[idx] !== input_string[idx - 1]) return acc + cur;
    return acc;
  }, "");

  // 외톨이 알파벳 구하기
  const answer_set = new Set();
  const checker = new Array(26).fill(false);
  const charCode_a = "a".charCodeAt();
  unique_string.split("").forEach((char) => {
    const idx = char.charCodeAt() - charCode_a;
    if (checker[idx]) answer_set.add(char);
    else checker[idx] = true;
  });

  // 비어있는 경우 'N' 반환
  if (answer_set.size === 0) return "N";

  // 알파벳순으로 정렬해서 정답 문자열 구하기
  const answer = Array.from(answer_set).sort().join("");
  return answer;
}
