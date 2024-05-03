const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N, M, V;
let currentInputCnt = 0;
let graph;

rl.on("line", (line) => {
  if (!N) {
    [N, M, V] = line.split(" ").map((num) => parseInt(num));
    graph = new Array(N + 1);
    for (let idx = 1; idx <= N; idx++) {
      graph[idx] = new Array();
    }
  } else if (currentInputCnt < M) {
    const [pos1, pos2] = line.split(" ").map((num) => parseInt(num));
    graph[pos1].push(pos2);
    graph[pos2].push(pos1);
    currentInputCnt++;
  } else {
    rl.close();
  }
});

rl.on("close", () => {
  for (arr of graph) {
    arr && arr.sort((a, b) => a - b);
  }
  let checkVisit = new Array(N + 1).fill(false);
  let visitNode = [];
  dfs(checkVisit, visitNode, V);
  print(visitNode);
  console.log("");
  checkVisit = new Array(N + 1).fill(false);
  visitNode = [];
  bfs(checkVisit, visitNode, V);
  print(visitNode);
});

const dfs = (checkVisit, visitNode, currNode) => {
  if (checkVisit[currNode]) return;
  checkVisit[currNode] = true;
  visitNode.push(currNode);
  for (node of graph[currNode]) {
    if (!checkVisit[node]) dfs(checkVisit, visitNode, node);
  }
};

const bfs = (checkVisit, visitNode, startNode) => {
  const queue = [];
  queue.push(startNode);
  while (queue.length !== 0) {
    const currNode = queue.shift();
    if (checkVisit[currNode]) continue;
    checkVisit[currNode] = true;
    visitNode.push(currNode);
    for (node of graph[currNode]) queue.push(node);
  }
};

const print = (visitNode) => {
  visitNode.forEach((num, idx) => {
    process.stdout.write(num.toString());
    if (idx !== visitNode.length - 1) process.stdout.write(" ");
  });
};
