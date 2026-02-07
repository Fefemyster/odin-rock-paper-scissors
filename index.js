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
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    return "Its a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return "Rock beats scissors! Human wins!";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return "Rock beats scissors! Computer wins!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return "Paper beats rock! Human wins!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return "Paper beats rock!  Computer wins!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return "Scissors beats paper!  Human wins!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return "Scissors beats paper!  Computer wins!";
  }
}

console.log("Human choice: " + humanChoice);
console.log("Computer choice: " + computerChoice);
console.log("Round Result: " + playRound(humanChoice, computerChoice));
console.log(`Human score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);
