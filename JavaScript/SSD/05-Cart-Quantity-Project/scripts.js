const showQuantityButton = document.querySelector(".show-quantity");
const addToCartButton = document.querySelector(".add-to-cart");
const addTwoButton = document.querySelector(".add-two");
const addThreeButton = document.querySelector(".add-three");
const resetButton = document.querySelector(".reset-cart");

const addFourButton = document.querySelector(".add-four");
const addFiveButton = document.querySelector(".add-five");
const removeFromCartButton = document.querySelector(".remove-from-cart");
const reduceTwoButton = document.querySelector(".reduce-two");
const reduceThreeButton = document.querySelector(".reduce-three");

let cartQuantity = 0;

showQuantityButton.addEventListener("click", () => {
  console.log(`Cart Quantity : ${cartQuantity}`);
});

addToCartButton.addEventListener("click", () => {
  cartQuantity += 1;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

addTwoButton.addEventListener("click", () => {
  cartQuantity += 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

addThreeButton.addEventListener("click", () => {
  cartQuantity += 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

addFourButton.addEventListener("click", () => {
  cartQuantity += 4;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

addFiveButton.addEventListener("click", () => {
  cartQuantity += 5;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

reduceTwoButton.addEventListener("click", () => {
  cartQuantity -= 2;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

reduceThreeButton.addEventListener("click", () => {
  cartQuantity -= 3;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

removeFromCartButton.addEventListener("click", () => {
  cartQuantity -= 1;
  console.log(`Cart Quantity: ${cartQuantity}`);
});

resetButton.addEventListener("click", () => {
  cartQuantity = 0;
  console.log("Cart was reset.");
  console.log(`Cart Quantity: ${cartQuantity}`);
});
