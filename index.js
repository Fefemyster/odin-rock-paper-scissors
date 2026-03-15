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

//1.Add a div

//2.Add each result to the list without overwriting the previous one
// Each element should create a new element for the list
// The result of each round should be stored somewhere

function playRound(humanChoice) {
  const main = document.querySelector("main");
  const listElement = document.createElement("li");

  main.appendChild(div);
  div.appendChild(ul);
  ul.appendChild(listElement);

  const computerChoice = getComputerChoice();

  console.log("Human choice: " + humanChoice);
  console.log("Computer choice: " + computerChoice);

  switch (true) {
    case humanChoice === computerChoice:
      humanScore++;
      computerScore++;
      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Result: It's a tie!";
      break;

    case humanChoice === "rock" && computerChoice === "scissors": {
      humanScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Rock beats scissors! Human wins!";
      break;
    }

    case humanChoice === "scissors" && computerChoice === "rock": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Rock beats scissors! Computer wins!";
      break;
    }

    case humanChoice === "paper" && computerChoice === "rock": {
      humanScore++;
      console.log("Paper beats rock! Human wins!");
      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Paper beats rock! Human wins!";
      break;
    }

    case humanChoice === "rock" && computerChoice === "paper": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Paper beats rock!  Computer wins!";
      break;
    }

    case humanChoice === "scissors" && computerChoice === "paper": {
      humanScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Scissors beats paper!  Human wins!";
      break;
    }

    case humanChoice === "paper" && computerChoice === "scissors": {
      computerScore++;

      listElement.textContent =
        `User selection: ${humanChoice}` +
        " " +
        `Computer selection: ${computerChoice}` +
        " " +
        "Scissors beats paper!  Computer wins!";
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
