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

const pch = getRandomChoice(rps);
const cpch = getRandomChoice(rps);

console.log(pch, cpch);
console.log(playRound(pch, cpch));
