function solution(id_list, report, k) {
  var answer = [];
  const userMap = new Map(); // key: userId, value: 신고한 유저의 Set
  const reportMap = new Map(); // key: userId, value: 신고당한 횟수
  id_list.forEach((id) => {
    userMap.set(id, new Set());
    reportMap.set(id, 0);
  });
  // report 결과 처리하기
  report.forEach((record) => {
    const [user, target] = record.split(" ");
    const reportSet = userMap.get(user);
    // 이미 신고한 적이 있는 경우에는 횟수를 누적하지 않는다.
    if (reportSet.has(target)) return;
    reportSet.add(target);
    reportMap.set(target, reportMap.get(target) + 1);
  });
  // 메일 보내기
  id_list.forEach((id) => {
    let count = 0;
    const reportSet = userMap.get(id);
    reportSet.forEach((target) => {
      if (reportMap.get(target) >= k) count++;
    });
    answer.push(count);
  });
  return answer;
}
