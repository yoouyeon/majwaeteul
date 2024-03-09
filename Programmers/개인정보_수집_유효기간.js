// dateToCompare 기준으로 date가 이후거나 같은지 확인 dateToCompare: 만료일자, date: 오늘
function isAfter(dateToCompare, date) {
  const { year: dateYear, month: dateMonth, day: dateDay } = date;
  const {
    year: dateToCompareYear,
    month: dateToCompareMonth,
    day: dateToCompareDay,
  } = dateToCompare;
  // 년 비교
  if (dateToCompareYear < dateYear) return true;
  if (dateToCompareYear > dateYear) return false;
  // 월 비교
  if (dateToCompareMonth < dateMonth) return true;
  if (dateToCompareMonth > dateMonth) return false;
  // 일 비교
  if (dateToCompareDay <= dateDay) return true;
  return false;
}

function makeDate(today) {
  const [year, month, day] = today.split(".").map((str) => parseInt(str));
  return { year, month, day };
}

function makeExpirationDate(date, period) {
  let { year, month, day } = date;
  month += period;
  if (month > 12) {
    const tempMonth = month % 12;
    if (tempMonth === 0) {
      year += parseInt(month / 12) - 1;
      month = 12;
    } else {
      year += parseInt(month / 12);
      month = tempMonth;
    }
  }
  return { year, month, day };
}

function solution(today, terms, privacies) {
  var answer = [];
  const todayDate = makeDate(today);
  const termsMap = new Map(); // key : 약관 종류, value : 유효기간
  terms.forEach((term) => {
    const [type, period] = term.split(" ");
    termsMap.set(type, parseInt(period));
  });
  privacies.forEach((privacy, idx) => {
    const [date, type] = privacy.split(" ");
    const expireDate = makeExpirationDate(makeDate(date), termsMap.get(type));
    // 만료일자 기준으로 오늘날짜가 이후거나 같으면
    if (isAfter(expireDate, todayDate)) answer.push(idx + 1);
  });

  return answer;
}
