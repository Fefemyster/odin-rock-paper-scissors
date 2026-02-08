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

let humanScore = 0;
let computerScore = 0;

function playRound() {
  const humanChoice = getHumanChoice();
  const computerChoice = getComputerChoice();

  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);

  if (humanChoice === computerChoice) {
    humanScore++;
    computerScore++;
    console.log("Its a tie!");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("Rock beats scissors! Human wins!");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("Rock beats scissors! Computer wins!");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Paper beats rock! Human wins!");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("Paper beats rock!  Computer wins!");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("Scissors beats paper!  Human wins!");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("Scissors beats paper!  Computer wins!");
  }
}

function scores() {
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

function playGame() {
  console.log("ROUND 1");
  playRound();
  scores();
  console.log(" ");

  console.log("ROUND 2");
  playRound();
  scores();
  console.log(" ");

  console.log("ROUND 3");
  playRound();
  scores();
  console.log(" ");

  console.log("ROUND 4");
  playRound();
  scores();
  console.log(" ");

  console.log("ROUND 5");
  playRound();
  console.log(`Final Score Human: ${humanScore}`);
  console.log(`Final Score Computer: ${computerScore}`);
}

playGame();
