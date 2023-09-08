const rps = {
  rock: {
    wins: "scissors",
    looses: "paper",
  },
  paper: {
    wins: "rock",
    looses: "paper",
  },
  scissors: {
    wins: "paper",
    looses: "rock",
  },
};

const getRandomChoice = (rps) => {
  const keys = Object.keys(rps);
  return keys[Math.floor(Math.random() * keys.length)];
};

const playRound = (playerChoice, computerChoice) => {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  const p1 = rps[playerChoice];

  if (p1.wins === computerChoice) {
    return true;
  } else {
    return false;
  }
};

// UI

const buttons = document.querySelectorAll("button");
let player = "";
let cp = "";
let rounds = 0;

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    player = event.target.id;
    cp = getRandomChoice(rps);

    let playerCounter = 0;
    let cpCounter = 0;

    const playerWon = playRound(player, cp);
    if (playerWon === "draw") {
      console.log(playerWon);
      return;
    }

    if (playerWon) {
      playerCounter++;
      const playerCount = document.querySelector("#playerCount");
      playerCount.textContent = playerCounter;
      rounds++;
    } else {
      cpCounter++;
      const cpCount = document.querySelector("#cpCount");
      cpCount.textContent = cpCounter;
      rounds++;
    }

    if (rounds === 5) {
      const winner = document.querySelector("#winner");
      winner.textContent = playerCounter > cpCounter ? "You win" : "You loose";
      rounds = 0;
      playerCounter = 0;
      cpCounter = 0;
    }
  });
});
