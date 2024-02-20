function push(queueData, newEl) {
  queueData.sum += newEl;
  queueData.queue.push(newEl);
}

function shift(queueData) {
  const front = queueData.queue[queueData.frontIdx];
  queueData.sum -= front;
  queueData.frontIdx++;
  return front;
}

function solution(queue1, queue2) {
  let findAnswer = false; // 정답 찾음 여부
  let count = 0; // 작업 횟수
  const totalTries = queue1.length * 3; // 총 작업 시도 횟수
  const queueData1 = {
    frontIdx: 0,
    queue: queue1,
    sum: queue1.reduce((acc, cur) => acc + cur, 0),
  };
  const queueData2 = {
    frontIdx: 0,
    queue: queue2,
    sum: queue2.reduce((acc, cur) => acc + cur, 0),
  };

  for (let i = 0; i < totalTries; i++) {
    if (queueData1.sum < queueData2.sum) {
      count++;
      push(queueData1, shift(queueData2));
    } else if (queueData1.sum > queueData2.sum) {
      count++;
      push(queueData2, shift(queueData1));
    } else {
      findAnswer = true;
      break;
    }
  }
  if (findAnswer) answer = count;
  else answer = -1;
  return answer;
}
