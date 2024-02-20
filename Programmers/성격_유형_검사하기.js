const KBTI = {
  R: 0,
  T: 0,
  C: 0,
  F: 0,
  J: 0,
  M: 0,
  A: 0,
  N: 0,
};

function solution(survey, choices) {
  survey.forEach((type, idx) => {
    const negativeType = type[0];
    const positiveType = type[1];
    const choice = choices[idx];
    if (choice < 4) {
      KBTI[negativeType] += 4 - choice;
    } else if (choice > 4) {
      KBTI[positiveType] += choice - 4;
    }
  });
  // let answer = "";
  // answer += KBTI['R'] >= KBTI['T'] ? 'R' : 'T';
  // answer += KBTI['C'] >= KBTI['F'] ? 'C' : 'F';
  // answer += KBTI['J'] >= KBTI['M'] ? 'J' : 'M';
  // answer += KBTI['A'] >= KBTI['N'] ? 'A' : 'N';
  const { R, T, C, F, J, M, A, N } = KBTI;
  // prettier-ignore
  let answer = `${R >= T ? "R" : "T"}${C >= F ? "C" : "F"}${J >= M ? "J" : "M"}${A >= N ? "A" : "N"}`;
  return answer;
}
