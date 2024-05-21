function solution(skill, skill_trees) {
  let answer = 0;
  const skillArray = skill.split("");
  // console.log(skillArray);
  for (skillTree of skill_trees) {
    const filteredTree = skillTree
      .split("")
      .filter((skill) => skillArray.includes(skill))
      .join("");
    // console.log(filteredTree);
    if (skill.startsWith(filteredTree)) answer++;
  }
  return answer;
}
