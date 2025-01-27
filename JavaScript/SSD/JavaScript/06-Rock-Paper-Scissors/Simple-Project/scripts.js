const buttons = document.querySelectorAll("button");
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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerMove = button.innerHTML;

    if (playerMove === "Reset Score") {
      updateScore("Reset");

      resultElement.innerHTML = `Score was reset successfully.`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    } else {
      const computerMove = getRandomMove();

      const result = playGame(playerMove, computerMove);

      resultElement.innerHTML = `${result}`;
      movesElement.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}.`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
  });
});

function playGame(playerMove, computerMove) {
  let newScore = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  console.log(newScore);
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

  localStorage.setItem("score", JSON.stringify(score));
  updateScore(result);
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
