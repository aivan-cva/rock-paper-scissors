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

const buttons = document.querySelectorAll(".gameBtn");
let player = "";
let cp = "";
let rounds = 0;
let playerCounter = 0;
let cpCounter = 0;
let drawCounter = 0;

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", (event) => {
  rounds = 0;
  playerCounter = 0;
  drawCounter = 0;
  cpCounter = 0;

  const cpCount = document.querySelector("#cpCount");
  cpCount.textContent = cpCounter;

  const playerCount = document.querySelector("#playerCount");
  playerCount.textContent = playerCounter;

  const winner = document.querySelector("#winner");
  winner.textContent = "";

  const drawCount = document.querySelector("#drawCount");
  drawCount.textContent = drawCounter;

  buttons.forEach((btn) => {
    btn.disabled = false;
  });
});

buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log("click");
    player = event.target.id;
    cp = getRandomChoice(rps);

    const playerWon = playRound(player, cp);
    if (playerWon === "draw") {
      const drawCount = document.querySelector("#drawCount");
      drawCounter++;
      drawCount.textContent = drawCounter;
      rounds++;
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

      if (playerCounter > cpCounter) {
        winner.textContent = "YOU WIN";
      } else if (cpCounter > playerCounter) {
        winner.textContent = "YOU LOOSE";
      } else if (playerCounter === cpCounter) {
        winner.textContent = "DRAW";
      }

      buttons.forEach((btn) => {
        btn.disabled = true;
      });
    }
  });
});
