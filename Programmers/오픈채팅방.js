const userMap = new Map();

function solution(record) {
  let answer = [];
  const recordList = [];

  record.forEach((message) => {
    const [command, uid, nickname] = message.split(" ");
    switch (command) {
      case "Enter":
        userMap.set(uid, nickname);
        recordList.push({ command: "Enter", uid });
        break;
      case "Leave":
        recordList.push({ command: "Leave", uid });
        break;
      case "Change":
        userMap.set(uid, nickname);
        break;
    }
  });
  recordList.forEach((recordItem) => {
    switch (recordItem.command) {
      case "Enter":
        answer.push(`${userMap.get(recordItem.uid)}님이 들어왔습니다.`);
        break;
      case "Leave":
        answer.push(`${userMap.get(recordItem.uid)}님이 나갔습니다.`);
    }
  });
  return answer;
}
