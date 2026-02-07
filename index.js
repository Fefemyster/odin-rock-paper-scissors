let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const max = 10;
  const min = 1;
  let rock = Math.random().toFixed(1) * (max - min);
  let scissors = Math.random().toFixed(1) * (max - min);
  let paper = Math.random().toFixed(1) * (max - min);
  const choice = Math.random().toFixed(1) * (max - min);

  if (choice >= rock) {
    return "rock";
  } else if (choice <= scissors) {
    return "scissors";
  } else {
    return "paper";
  }
}

function getHumanChoice() {
  let userEntry = prompt();

  return userEntry.toLowerCase();
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "Its a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "Rock beats scissors! Human wins!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    return "Rock beats scissors! Computer wins!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "Paper beats rock! Human wins!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "Paper beats rock!  Computer wins!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "Scissors beats paper!  Human wins!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return "Scissors beats paper!  Computer wins!";
  }
}

playRound(humanChoice, computerChoice);

console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
console.log("Round Result: " + playRound(humanChoice, computerChoice));
