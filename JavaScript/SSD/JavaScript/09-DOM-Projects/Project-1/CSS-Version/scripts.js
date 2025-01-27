const subscribeButton = document.querySelector(".js-subscribe");
const calculateButton = document.querySelector(".js-calculate-button");
const gamingButton = document.querySelector(".js-gaming-button");
const musicButton = document.querySelector(".js-music-button");
const techButton = document.querySelector(".js-tech-button");

const inputElement = document.querySelector(".js-cost-input");
const resultElement = document.querySelector(".js-total-cost");

subscribeButton.addEventListener("click", () => {
  let elementText = subscribeButton.innerHTML;

  subscribeButton.innerHTML =
    elementText === "Subscribe" ? "Subscribed" : "Subscribe";

  if (subscribeButton.innerHTML === "Subscribed") {
    subscribeButton.classList.add("subscribed");
  } else {
    subscribeButton.classList.remove("subscribed");
  }
});

gamingButton.addEventListener("click", () => {
  if (gamingButton.classList.contains("gaming-button")) {
    gamingButton.classList.remove("gaming-button");
  } else {
    gamingButton.classList.add("gaming-button");
  }
});

musicButton.addEventListener("click", () => {
  if (musicButton.classList.contains("gaming-button")) {
    musicButton.classList.remove("gaming-button");
  } else {
    musicButton.classList.add("gaming-button");
  }
});

techButton.addEventListener("click", () => {
  if (techButton.classList.contains("gaming-button")) {
    techButton.classList.remove("gaming-button");
  } else {
    techButton.classList.add("gaming-button");
  }
});

calculateButton.addEventListener("click", () => {
  const input = Number(inputElement.value);
  let output = input < 40 ? input + 10 : input;

  resultElement.innerHTML = `Total Shipping Cost: $${output}`;
});
