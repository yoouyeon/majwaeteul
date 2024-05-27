// NOTE : 풀이가 굉장히 마음에 들지 않음 😤

let matchArray;
let checkSelect;
let regexBannedId;
let answerSet;

function solution(user_id, banned_id) {
  // dfs용
  checkSelect = Array(user_id.length).fill(false);
  // 불량 사용자 아이디를 정규식 패턴으로 변경한 배열
  regexBannedId = banned_id.map((id) => id.replaceAll("*", "[a-z0-9]"));
  // console.log(regexBannedId) // 확인용 출력
  answerSet = new Set(); // 중복 제거를 위해 set 활용
  dfs(0, [], user_id, banned_id);
  return answerSet.size;
}

function dfs(curIdx, curSelect, user_id, banned_id) {
  if (curIdx === banned_id.length) {
    // 다 뽑은 경우
    answerSet.add(curSelect.sort().join(","));
    return;
  }
  for (let idx = 0; idx < user_id.length; idx++) {
    if (checkSelect[idx]) continue;
    const curUserId = user_id[idx];
    if (
      curUserId.match(regexBannedId[curIdx]) &&
      curUserId.length === banned_id[curIdx].length
    ) {
      checkSelect[idx] = true;
      dfs(curIdx + 1, [...curSelect, curUserId], user_id, banned_id);
      checkSelect[idx] = false;
    }
  }
}
