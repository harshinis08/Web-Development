const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button");
const scissorsButton = document.querySelector(".scissors-button");
const resetButton = document.querySelector(".reset-button");

const resultElement = document.querySelector(".js-result");
const scoreElement = document.querySelector(".js-score");
const movesElement = document.querySelector(".js-moves");

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

console.log(score);
scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

rockButton.addEventListener("click", () => {
  const computerMove = getRandomMove();

  const result = playGame("Rock", computerMove);

  resultElement.innerHTML = `${result}`;
  const computerEmoji = `<img src="images/${computerMove}-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  const playerEmoji = `<img src="images/rock-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  movesElement.innerHTML = `You picked ${playerEmoji}. Computer picked ${computerEmoji}.`;
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  updateScore(result);
});

paperButton.addEventListener("click", () => {
  const computerMove = getRandomMove();

  const result = playGame("Paper", computerMove);

  resultElement.innerHTML = `${result}`;
  const computerEmoji = `<img src="images/${computerMove}-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  const playerEmoji = `<img src="images/paper-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  movesElement.innerHTML = `You picked ${playerEmoji}. Computer picked ${computerEmoji}.`;
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  updateScore(result);
});

scissorsButton.addEventListener("click", () => {
  const computerMove = getRandomMove();

  const result = playGame("Scissors", computerMove);

  resultElement.innerHTML = `${result}`;
  const computerEmoji = `<img src="images/${computerMove}-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  const playerEmoji = `<img src="images/scissors-emoji.png" alt="rock-emoji" class="move-icon-small" />`;
  movesElement.innerHTML = `You picked ${playerEmoji}. Computer picked ${computerEmoji}.`;
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

  updateScore(result);
});

resetButton.addEventListener("click", () => {
  updateScore("Reset");

  resultElement.innerHTML = `Score was reset successfully.`;
  scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
});

function playGame(playerMove, computerMove) {
  let result = "";

  if (playerMove === computerMove) {
    result = `It's a tie.`;
  } else {
    if (playerMove === "Rock") {
      if (computerMove === "Paper") {
        result = `You lose.`;
      } else if (computerMove === "Scissors") {
        result = `You WIN!!!`;
      }
    } else if (playerMove === "Paper") {
      if (computerMove === "Scissors") {
        result = `You lose.`;
      } else if (computerMove === "Rock") {
        result = `You WIN!!!`;
      }
    } else if (playerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = `You lose.`;
      } else if (computerMove === "Paper") {
        result = `You WIN!!!`;
      }
    }
  }
  console.log(result);
  localStorage.setItem("score", JSON.stringify(score));
  return result;
}

function updateScore(result) {
  if (result === "You WIN!!!") {
    score.wins++;
  } else if (result === "It's a tie.") {
    score.ties++;
  } else if (result === "You lose.") {
    score.losses++;
  } else if (result === "Reset") {
    score.wins = 0;
    score.ties = 0;
    score.losses = 0;
  }

  localStorage.setItem("score", JSON.stringify(score));
}

function getRandomMove() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  let output = "";

  if (randomNumber === 1) {
    output = "Rock";
  } else {
    output = randomNumber === 2 ? "Paper" : "Scissors";
  }
  return output;
}
