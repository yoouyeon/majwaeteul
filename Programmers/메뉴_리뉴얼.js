// map: 조합 저장 맵
// arr: 조합을 만드려는 배열
// comb: 조합을 만들고 있는 배열
// idx: 현재 포인터가 위치해있는 인덱스
// goal: 몇개 구성의 조합을 만들고 있는지 (goal === comb.length인 경우에 조합 결과 반환)
function combination(map, arr, comb, idx, goal) {
  // 조합이 완성된 경우
  if (comb.length === goal) {
    combStr = comb.join("");
    // 이미 있으면 value 증가, 없으면 value 1로 설정
    const currCourseMap = map.get(goal);
    if (currCourseMap.has(combStr))
      currCourseMap.set(combStr, currCourseMap.get(combStr) + 1);
    else currCourseMap.set(combStr, 1);
    return;
  }
  // 조합하기
  for (let i = idx + 1; i < arr.length; i++) {
    comb.push(arr[i]);
    combination(map, arr, comb, i, goal);
    comb.pop();
  }
}

function solution(orders, course) {
  const menuMap = new Map(course.map((count) => [count, new Map()])); // key: 코스 길이, (key: 메뉴 조합, value: 주문 횟수)
  // 각 손님별로 반복
  orders.forEach((order, idx) => {
    // 1. 오름차순 정렬
    const orderArr = order.split("").sort();
    // 2. course의 갯수만큼
    course.forEach((count) => {
      // 2. 조합을 만들어서 이것저것~
      combination(menuMap, orderArr, [], -1, count);
    });
  });

  // 완성된 맵
  // console.log(menuMap)
  // 맵 순회
  const answer = [];
  menuMap.forEach((currCourseMap) => {
    let courseArr = [];
    let maxValue = 0;
    currCourseMap.forEach((value, key) => {
      if (value < 2) return;
      if (maxValue > value) return;
      if (maxValue === value) courseArr.push(key);
      else {
        maxValue = value;
        courseArr = [key];
      }
    });
    answer.push(...courseArr);
  });
  answer.sort();
  return answer;
}
