function getComputerChoice() {
  const max = 10;
  const min = 1;
  let rock = Math.random().toFixed(1) * (max - min) + min;
  let scissors = Math.random().toFixed(1) * (max - min) + min;
  let paper = Math.random().toFixed(1) * (max - min) + min;
  const choice = Math.random().toFixed(1) * (max - min) + min;

  console.log(rock);
  console.log(scissors);
  console.log(paper);
  console.log(choice);

  if (choice >= rock) {
    return "rock";
  } else if (choice <= scissors) {
    return "scissors";
  } else {
    return "paper";
  }
}

console.log(getComputerChoice());
