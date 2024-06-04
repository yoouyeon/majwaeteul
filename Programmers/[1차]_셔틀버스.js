function convertToMinute(time) {
  const [hour, minute] = time.split(":");
  return parseInt(hour) * 60 + parseInt(minute);
}

function convertToHour(time) {
  const hour = Math.floor(time / 60)
    .toString()
    .padStart(2, "0");
  const minute = (time % 60).toString().padStart(2, "0");
  return `${hour}:${minute}`;
}

function solution(n, t, m, timetable) {
  let answer = "";
  // step 1. 시간을 분단위로 환산해서 오름차순 정렬
  const timetableMinute = timetable
    .map((time) => convertToMinute(time))
    .sort((a, b) => a - b);
  // console.log(timetableMinute)
  // step 2. 막차 전까지 버스에 크루들 태우기
  let busTime = convertToMinute("9:00");
  for (let busCnt = 0; busCnt < n - 1; busCnt++) {
    let crewCount = 0;
    while (
      timetableMinute.length !== 0 &&
      timetableMinute[0] <= busTime &&
      crewCount < m
    ) {
      timetableMinute.shift();
      crewCount++;
    }
    busTime += t;
  }
  // console.log("timetableMinute", timetableMinute);
  // step 3. 막차 타기
  let crewCount = 0;
  let lastCrewTime = 0;
  while (
    timetableMinute.length !== 0 &&
    timetableMinute[0] <= busTime &&
    crewCount < m
  ) {
    lastCrewTime = timetableMinute[0];
    // console.log("lastCrewTime", convertToHour(lastCrewTime));
    timetableMinute.shift();
    crewCount++;
  }
  // console.log("timetableMinute", timetableMinute);
  if (crewCount < m) {
    // case 1. 막차에 여유가 남는 경우
    // 막차 출발 시간에 맞춰 선다.
    // console.log("case 1");
    answer = convertToHour(busTime);
  } else {
    // case 2. 막차에 여유가 없는 경우
    // 막차를 타는 마지막 크루보다 1분 먼저 도착해서 막차를 탄다.
    // console.log("case 2");
    answer = convertToHour(lastCrewTime - 1);
  }
  return answer;
}
