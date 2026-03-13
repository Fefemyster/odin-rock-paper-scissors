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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice) {
  const computerChoice = getComputerChoice();

  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);

  switch (true) {
    case humanChoice === computerChoice:
      humanScore++;
      computerScore++;
      console.log("Its a tie!");
      break;

    case humanChoice === "rock" && computerChoice === "scissors": {
      humanScore++;
      console.log("Rock beats scissors! Human wins!");
      break;
    }

    case humanChoice === "scissors" && computerChoice === "rock": {
      computerScore++;
      console.log("Rock beats scissors! Computer wins!");
      break;
    }

    case humanChoice === "paper" && computerChoice === "rock": {
      humanScore++;
      console.log("Paper beats rock! Human wins!");
      break;
    }

    case humanChoice === "rock" && computerChoice === "paper": {
      computerScore++;
      console.log("Paper beats rock!  Computer wins!");
      break;
    }

    case humanChoice === "scissors" && computerChoice === "paper": {
      humanScore++;
      console.log("Scissors beats paper!  Human wins!");
      break;
    }

    case humanChoice === "paper" && computerChoice === "scissors": {
      computerScore++;
      console.log("Scissors beats paper!  Computer wins!");
      break;
    }
  }
}

function scores() {
  console.log(`Human score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

//NOTE: Always remember to reference the elements
let btnRock = document.querySelector("#rock");
let btnPaper = document.querySelector("#paper");
let btnScissors = document.querySelector("#scissors");

/*
1.Add an event listener to the buttons that call 
your playRound function with the correct 
playerSelection every time a button is clicked.
*/

btnRock.addEventListener("click", (e) => {
  playRound("rock");
});

btnPaper.addEventListener("click", (e) => {
  playRound("paper");
});

btnScissors.addEventListener("click", (e) => {
  playRound("scissors");
});

/*
1. User select between 3 choices: rock, paper, scissors
2. Get the option selected by the user.
3. Assign each option to each button 
4. Then we need to pass that option to the playRound function
5. Option gets evaluated and compared to computer choice.

*/
