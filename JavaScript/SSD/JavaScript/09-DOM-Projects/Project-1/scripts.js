const subscribeButton = document.querySelector(".js-subscribe");
const calculateButton = document.querySelector(".js-calculate-button");
const inputElement = document.querySelector(".js-cost-input");
const resultElement = document.querySelector(".js-total-cost");

subscribeButton.addEventListener("click", () => {
  let elementText = subscribeButton.innerHTML;

  subscribeButton.innerHTML =
    elementText === "Subscribe" ? "Subscribed" : "Subscribe";
});

calculateButton.addEventListener("click", () => {
  const input = inputElement.value;
  calculateShippingCost(input);
});

inputElement.addEventListener("keydown", (e) => {
  const input = inputElement.value;

  if (e.key === "Enter") {
    calculateShippingCost(input);
  }
});

function calculateShippingCost(input) {
  const inputValue = Number(inputElement.value);
  if (input === "") {
    resultElement.classList.add("error");
    resultElement.innerHTML = `Error: Cost cannot be $${inputValue}`;
  } else {
    if (inputValue < 0) {
      resultElement.classList.add("error");
      resultElement.innerHTML = `Error: Cost cannot be less than $${inputValue}`;
    } else {
      resultElement.classList.remove("error");
      let output = inputValue < 40 ? inputValue + 10 : inputValue;
      resultElement.innerHTML = `Total Shipping Cost: $${output}`;
    }
  }
}
