const answer = {
  0: 0,
  1: 0,
};

// arr: 배열
// start_row, start_col: 시작 지점의 좌표
// length: 영역의 가로, 세로 길이

// 압축 가능 여부 확인
function canCompress(arr, start_row, start_col, length) {
  const element = arr[start_row][start_col];
  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      if (element !== arr[start_row + row][start_col + col]) return false;
    }
  }
  return true;
}

// 압축하기
function quadCompress(arr, start_row, start_col, length) {
  // 영역의 길이가 1인 경우에는 더 이상 압축할 수 없음
  if (length === 1 || canCompress(arr, start_row, start_col, length)) {
    answer[arr[start_row][start_col]]++;
    return;
  }
  const nextLength = length / 2;
  quadCompress(arr, start_row, start_col, nextLength);
  quadCompress(arr, start_row + nextLength, start_col, nextLength);
  quadCompress(arr, start_row, start_col + nextLength, nextLength);
  quadCompress(arr, start_row + nextLength, start_col + nextLength, nextLength);
}

function solution(arr) {
  quadCompress(arr, 0, 0, arr.length);
  return [answer[0], answer[1]];
}
