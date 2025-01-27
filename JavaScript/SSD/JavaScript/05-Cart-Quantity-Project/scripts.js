const cartQuantityElement = document.querySelector(".cart-quantity");
const infoElement = document.querySelector(".info");

const buttons = document.querySelectorAll("button");

let cartQuantity = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const elementText = button.innerHTML;

    updateCartQuantity(elementText);
  });
});

function updateCartQuantity(userInput) {
  if (userInput === "Show Quantity") {
    displayInfo("");
    displayResult(`Cart Quantity: ${cartQuantity}`);
  } else if (userInput === "Add to Cart") {
    if (cartQuantity + 1 > 10) {
      displayInfo("The Cart is full. Can't add more items. Sorry.");
      infoElement.classList.add("error");
    } else {
      infoElement.classList.remove("error");
      cartQuantity += 1;
      displayInfo(`Item Added`);
      displayResult(`Cart Quantity: ${cartQuantity}`);
    }
  } else if (userInput === "Reset Cart") {
    cartQuantity = 0;
    infoElement.classList.remove("error");

    displayInfo("Cart was reset successfully.");
    displayResult(`Cart Quantity: ${cartQuantity}`);
  } else if (userInput === "Remove from Cart") {
    if (cartQuantity - userInput < 0) {
      infoElement.classList.add("error");
      displayInfo("Not enough items in Cart.");
    } else {
      cartQuantity -= input;
      infoElement.classList.remove("error");
      displayInfo(`Item Removed`);
      displayResult(`Cart Quantity: ${cartQuantity}`);
    }
  } else if (userInput.includes("+")) {
    let inputValue = Number(userInput.replace(/[+]/g, ""));

    if (cartQuantity + inputValue > 10) {
      infoElement.classList.add("error");
      displayInfo("The Cart is full. Can't add more items. Sorry.");
    } else {
      infoElement.classList.remove("error");
      cartQuantity += inputValue;
      displayInfo(`Item Added`);
      displayResult(`Cart Quantity: ${cartQuantity}`);
    }
  } else if (userInput.includes("-")) {
    let inputValue = Number(userInput.replace(/[-]/g, ""));

    if (cartQuantity - inputValue < 0) {
      infoElement.classList.add("error");
      displayInfo("Not enough items in Cart.");
    } else {
      cartQuantity -= inputValue;
      infoElement.classList.remove("error");
      displayInfo(`Item Removed`);
      displayResult(`Cart Quantity: ${cartQuantity}`);
    }
  }
}

function displayResult(result) {
  cartQuantityElement.innerHTML = `${result}`;
}

function displayInfo(info) {
  infoElement.innerHTML = info;
}
