function solution(str1, str2) {
  return Math.floor(jaccard(str1.toLowerCase(), str2.toLowerCase()) * 65536);
}

function jaccard(str1, str2) {
  const multiMap1 = makeMap(str1);
  const multiMap2 = makeMap(str2);
  // 교집합 크기 구하기
  const interCount = [...multiMap1.keys()].reduce((acc, cur) => {
    if (!multiMap2.has(cur)) return acc;
    return acc + Math.min(multiMap1.get(cur), multiMap2.get(cur));
  }, 0);
  // 합집합 크기 구하기
  let unionCount = 0;
  for (value of multiMap1.values()) unionCount += value;
  for (key of multiMap2.keys()) {
    if (multiMap1.has(key))
      unionCount =
        unionCount -
        multiMap1.get(key) +
        Math.max(multiMap1.get(key), multiMap2.get(key));
    else unionCount += multiMap2.get(key);
  }
  // 자카드 유사도 반환
  if (unionCount === 0) return 1;
  return interCount / unionCount;
}

function makeMap(str) {
  const retMap = new Map();
  for (let idx = 0; idx < str.length - 1; idx++) {
    if (isAlpha(str[idx]) && isAlpha(str[idx + 1])) {
      const substr = str.slice(idx, idx + 2);
      if (retMap.has(substr)) {
        retMap.set(substr, retMap.get(substr) + 1);
      } else {
        retMap.set(substr, 1);
      }
    }
  }
  return retMap;
}

function isAlpha(letter) {
  return letter >= "a" && letter <= "z";
}
