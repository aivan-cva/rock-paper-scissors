const choices = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  return choices[Math.floor(Math.random() * choices.length)];
};

const playRound = (playerChoice, computerChoice) => {
  if (!playerChoice) {
    return "Please enter an option";
  }
  const lowercase = playerChoice.toLowerCase();

  if (!choices.includes(lowercase)) {
    return "Please enter a valid option";
  }

  if (lowercase === computerChoice) {
    return "Draw";
  }

  if (lowercase === "rock" && computerChoice === "paper") {
    return "You lost, Paper beats Rock";
  }

  if (lowercase === "rock" && computerChoice === "scissors") {
    return "You won, Rock beats Scissors";
  }

  if (lowercase === "paper" && computerChoice === "rock") {
    return "You won, Paper beats Rock";
  }

  if (lowercase === "paper" && computerChoice === "scissors") {
    return "You lost, Scissors beats Paper";
  }

  if (lowercase === "scissors" && computerChoice === "paper") {
    return "You won, Scissors beats paper";
  }

  if (lowercase === "scissors" && computerChoice === "rock") {
    return "You lost, Rock beats Scissors";
  }
};

const game = () => {
  let playerCounter = 0;
  let computerCounter = 0;
  let draws = 0;
  for (let index = 0; index <= 4; index++) {
    let choice = prompt();
    const result = playRound(choice, getComputerChoice());
    if (result.includes("won")) {
      console.log(result);
      playerCounter++;
    }
    if (result.includes("lost")) {
      console.log(result);
      computerCounter++;
    }

    if (result.includes("Draw")) {
      console.log(result);
      draws++;
    }
  }

  return `The final score is: Player ${playerCounter}, Computer ${computerCounter}, Draws: ${draws} `;
};

console.log(game());
