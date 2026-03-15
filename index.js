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

const div = document.createElement("div");
const ul = document.createElement("ul");

//Display the running score, and announce a winner of the game once one player reaches 5 points.
//1. Display the running score
//2. Choose a winner when either score gets to 5

function playRound(humanChoice) {
  const main = document.querySelector("main");
  const listElement = document.createElement("li");

  main.appendChild(div);
  div.appendChild(ul);
  ul.appendChild(listElement);

  const computerChoice = getComputerChoice();

  switch (true) {
    case humanChoice === computerChoice:
      humanScore++;
      computerScore++;
      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Result: It's a tie!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;

      break;

    case humanChoice === "rock" && computerChoice === "scissors": {
      humanScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Rock beats scissors! Human wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;

      break;
    }

    case humanChoice === "scissors" && computerChoice === "rock": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Rock beats scissors! Computer wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;
      break;
    }

    case humanChoice === "paper" && computerChoice === "rock": {
      humanScore++;
      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Paper beats rock! Human wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;
      break;
    }

    case humanChoice === "rock" && computerChoice === "paper": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Paper beats rock!  Computer wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;
      break;
    }

    case humanChoice === "scissors" && computerChoice === "paper": {
      humanScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Scissors beats paper!  Human wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;
      break;
    }

    case humanChoice === "paper" && computerChoice === "scissors": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Scissors beats paper!  Computer wins!" +
        " " +
        `Current score - Human Score: ${humanScore} Computer Score: ${computerScore}`;
      break;
    }
  }

  if (humanScore >= 5) {
    const div = document.createElement("div");
    let p = document.createElement("p");
    main.appendChild(div);
    div.appendChild(p);
    p.textContent = "Human Wins!!";
    let resetButton = document.createElement("button");
    p.appendChild(resetButton);
    resetButton.textContent = "Reset";
    btnRock.disable = true;

    resetButton.addEventListener("click", (event) => {
      window.location.reload();
    });
  } else if (computerScore >= 5) {
    const div = document.createElement("div");
    let p = document.createElement("p");
    main.appendChild(div);
    div.appendChild(p);
    p.textContent = "Computer Wins!!";
    let resetButton = document.createElement("button");
    p.appendChild(resetButton);
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", (event) => {
      window.location.reload();
    });
  }
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
