function solution(board, moves) {
  let count = 0;
  const basket = [];
  // 크레인을 움직일 보드 생성
  // const craneBoard = new Array(board.length);
  // for (let i = 0; i < craneBoard.length; i++) {
  //   craneBoard[i] = new Array();
  // }
  // board.reverse().forEach((row) =>
  //   row.forEach((type, idx) => {
  //     if (type === 0) return;
  //     craneBoard[idx].push(type);
  //   })
  // );
  // 크레인을 움직일 보드 생성 - 좀 더 깔끔한 방법
  const craneBoard = board.reverse().reduce((acc, row) => {
    row.forEach((type, idx) => {
      if (type === 0) return;
      if (!acc[idx]) acc[idx] = [];
      acc[idx].push(type);
    });
    return acc;
  }, new Array(board.length));
  // 인형 뽑기~
  moves.forEach((move) => {
    const targetIdx = move - 1;
    // 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않는다.
    if (craneBoard[targetIdx].length === 0) return;
    // 인형 뽑기
    const doll = craneBoard[targetIdx].pop();
    // 바구니의 가장 위에 있는 인형이 뽑은 인형과 같은 종류인 경우
    if (basket.length !== 0 && basket.at(-1) === doll) {
      // 터뜨리고 사라진 인형의 개수를 증가
      basket.pop();
      count += 2; // 인형이 2개 사라짐..
    } else basket.push(doll); // 바구니에 채워넣기
  });
  return count;
}
