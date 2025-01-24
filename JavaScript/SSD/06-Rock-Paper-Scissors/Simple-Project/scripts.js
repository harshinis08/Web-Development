const buttons = document.querySelectorAll("button");
const resultElement = document.querySelector(".result");
const scoreElement = document.querySelector(".score");

let score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerMove = button.innerHTML;

    if (playerMove === "Reset Score") {
      score = {
        wins: 0,
        losses: 0,
        ties: 0,
      };
      resultElement.innerHTML = `Score was reset successfully.`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    } else {
      const computerMove = getRandomMove();

      const result = playGame(playerMove, computerMove);

      resultElement.innerHTML = `You picked ${playerMove}. Computer picked ${computerMove}. ${result}`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
  });
});

function playGame(playerMove, computerMove) {
  let result = "";

  if (playerMove === computerMove) {
    result = `It's a tie.`;
    score.ties++;
  } else {
    if (playerMove === "Rock") {
      if (computerMove === "Paper") {
        result = `You lose.`;
        score.losses++;
      } else if (computerMove === "Scissors") {
        result = `You WIN!!!`;
        score.wins++;
      }
    } else if (playerMove === "Paper") {
      if (computerMove === "Scissors") {
        result = `You lose.`;
        score.losses++;
      } else if (computerMove === "Rock") {
        result = `You WIN!!!`;
        score.wins++;
      }
    } else if (playerMove === "Scissors") {
      if (computerMove === "Rock") {
        result = `You lose.`;
        score.losses++;
      } else if (computerMove === "Paper") {
        result = `You WIN!!!`;
        score.wins++;
      }
    }
  }

  return result;
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
