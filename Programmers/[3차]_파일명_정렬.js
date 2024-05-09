function isNotNumber(input) {
  return Number.isNaN(parseInt(input));
}

function isNumber(input) {
  return !Number.isNaN(parseInt(input));
}

function compareFunction(a, b) {
  if (a.head !== b.head) return a.head < b.head ? -1 : 1;
  if (a.number !== b.number) return a.number - b.number;
  return 0;
}

function solution(files) {
  const parsedFiles = files.map((file) => {
    const name = file;

    let currentIdx = 0;

    while (currentIdx < file.length && isNotNumber(file[currentIdx]))
      currentIdx++;
    const head = file.slice(0, currentIdx).toLowerCase();

    const oldIdx = currentIdx;
    while (currentIdx < file.length && isNumber(file[currentIdx])) currentIdx++;
    const number = parseInt(file.slice(oldIdx, currentIdx));

    const tail = file.slice(currentIdx);
    return { name, head, number, tail };
  });
  parsedFiles.sort(compareFunction);

  var answer = [];
  return parsedFiles.map((fileObj) => fileObj.name);
}
