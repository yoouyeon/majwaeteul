function getParkingTime(inTime, outTime) {
  const [inHour, inMinute] = inTime.split(":").map((time) => parseInt(time));
  const [outHour, outMinute] = outTime.split(":").map((time) => parseInt(time));
  // 분으로 변환해서 뺄셈
  return outHour * 60 + outMinute - (inHour * 60 + inMinute);
}

function getParkingFee(fees, parkingTime) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  // 기본 시간 이하인 경우 기본 요금을 청구
  if (parkingTime <= defaultTime) return defaultFee;
  // 초과한 경우 초과한 시간에 대해서 단위시간마다 단위 요금 청구
  parkingTime -= defaultTime;
  return defaultFee + Math.ceil(parkingTime / unitTime) * unitFee;
}

function solution(fees, records) {
  const [defaultTime, defaultFee, unitTime, unitFee] = fees;
  const carMap = new Map(); // key: 차량번호, value: 입차 시간
  const answerMap = new Map(); // key: 차량번호, value: 현재까지의 주차 시간
  records.forEach((record) => {
    const [time, carNum, type] = record.split(" ");
    if (type === "IN") {
      // 입차인 경우 carMap에 차량번호와 입차 시간 저장
      carMap.set(carNum, time);
    } else {
      // 출차인 경우 누적 주차 시간을 구함
      const inTime = carMap.get(carNum);
      carMap.delete(carNum);
      const parkingTime = getParkingTime(inTime, time);
      // const parkingFee = getParkingFee(fees, parkingTime)
      if (answerMap.has(carNum))
        answerMap.set(carNum, answerMap.get(carNum) + parkingTime);
      else answerMap.set(carNum, parkingTime);
    }
  });
  // 출차 기록이 없는 경우에는 23:59에 출차한 것으로 간주해서 계산
  carMap.forEach((time, carNum) => {
    const inTime = carMap.get(carNum);
    const parkingTime = getParkingTime(inTime, "23:59");
    if (answerMap.has(carNum))
      answerMap.set(carNum, answerMap.get(carNum) + parkingTime);
    else answerMap.set(carNum, parkingTime);
  });
  // 차량 번호가 작은 순서대로 정렬해서 주차요금 배열 만들기
  const answerMapArr = Array.from(answerMap).sort(
    (a, b) => parseInt(a[0]) - parseInt(b[0])
  );
  const answer = Array.from(answerMapArr, (x) => getParkingFee(fees, x[1]));
  return answer;
}
