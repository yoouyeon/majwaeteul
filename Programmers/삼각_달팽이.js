function getNewPos(currY, currX, currDir) {
  switch (currDir) {
    case 0:
      newY = currY + 1;
      newX = currX;
      break;
    case 1:
      newY = currY;
      newX = currX + 1;
      break;
    case 2:
      newY = currY - 1;
      newX = currX - 1;
      break;
  }
  return { newY, newX };
}

function solution(n) {
  // step 1. 달팽이가 돌아다닐 맵 만들기
  const snailMap = new Array(n);
  for (let idx = 0; idx < n; idx++) {
    snailMap[idx] = new Array(idx + 1).fill(0);
  }
  // step 2. 돌아다니면서 채우기
  let currNumber = 1;
  const endNumber = (n + 1) * (n / 2);
  let currY = 0;
  let currX = 0;
  let currDir = 0; // 0: down, 1: right, 2: up
  while (currNumber <= endNumber) {
    // 일단 숫자를 찍는다.
    snailMap[currY][currX] = currNumber;
    // 현재 방향에 따라 다른 방향으로 이동한다.
    let newPos;
    newPos = getNewPos(currY, currX, currDir);
    // 방향 전환이 필요한 경우 방향 전환한다.
    if (newX >= n || newY >= n || snailMap[newY][newX] !== 0) {
      currDir = (currDir + 1) % 3;
      newPos = getNewPos(currY, currX, currDir);
    }
    currY = newPos.newY;
    currX = newPos.newX;
    currNumber++;
  }
  return snailMap.flat();
}
