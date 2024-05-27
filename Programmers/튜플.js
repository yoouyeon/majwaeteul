function solution(s) {
  const answer = [];
  // step 1. s 가공하기
  const sArray = s
    .slice(2, -2)
    .split("},{")
    .map((set) => set.split(",").map((el) => parseInt(el)));
  // console.log(sArray)

  // step 2. 초기 형태(집합 크기 오름차순)로 변환
  sArray.sort((a, b) => a.length - b.length);

  // step 3. 처음 등장하는 원소를 집어넣어주기
  for (set of sArray) {
    for (element of set) {
      if (!answer.includes(element)) answer.push(element);
    }
  }

  return answer;
}
