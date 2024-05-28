function solution(cacheSize, cities) {
  let answer = 0;
  const cache = [];
  if (cacheSize <= 0) return cities.length * 5;
  cities.forEach((city) => {
    const lowerCity = city.toLowerCase();
    if (cache.includes(lowerCity)) {
      answer += 1; // hit
      cache.splice(cache.indexOf(lowerCity), 1);
    } else {
      answer += 5; // miss
      if (cache.length === cacheSize) cache.shift();
    }
    cache.push(lowerCity);
  });
  return answer;
}
