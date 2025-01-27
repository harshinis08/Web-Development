const input = document.querySelectorAll("button");
const outputElement = document.querySelector(".output");
const computerMoveElement = document.querySelector(".computer-move");
const scoreElement = document.querySelector(".score");

let score = {
  wins: 0,
  losses: 0,
};

input.forEach((button) => {
  button.addEventListener("click", () => {
    const inputValue = button.innerHTML;

    const randomValue = generateRandomGuess();
    computerMoveElement.innerHTML = `Coin flip was ${randomValue.toUpperCase()}.`;

    if (inputValue === randomValue) {
      score.wins++;
      outputElement.innerHTML = `You WIN!`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
    } else {
      score.losses++;
      outputElement.innerHTML = `Wrong guess. You lose!`;
      scoreElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}`;
    }
  });
});

function updateScore() {}

function generateRandomGuess() {
  const value = Math.floor(Math.random() * 2) + 1;

  let output = "";
  output = value === 1 ? "Heads" : "Tails";
  return output;
}
