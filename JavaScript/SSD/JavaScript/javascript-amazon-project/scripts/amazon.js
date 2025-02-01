import { products } from "../data/products.js";
import { formatCurrency } from "../scripts/utils/money.js";
import { cart, addToCart, calculateCartQuantity } from "../data/cart.js";

const addedMessageTimeouts = {};

const productsGrid = document.querySelector(".js-products-grid");
const cartQuantityElement = document.querySelector(".js-cart-quantity");

let productsHTML = "";

products.forEach((product) => {
  productsHTML += `
    <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${formatCurrency(
            product.priceCents
          )}</div>

          <div class="product-quantity-container">
            <select class="js-quantity-selector-${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart js-added-to-cart-${product.id}">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button js-add-to-cart-button button-primary" data-product-id="${
            product.id
          }">Add to Cart</button>
        </div>

    `;
});

productsGrid.innerHTML = productsHTML;

updateCartQuantity();

const addToCartButtons = document.querySelectorAll(".js-add-to-cart-button");

addToCartButtons.forEach((addToCartButton) => {
  addToCartButton.addEventListener("click", () => {
    const productId = addToCartButton.dataset.productId;

    addToCart(productId);
    updateCartQuantity();
    displayAddedToCartAlert(productId);
  });
});

function updateCartQuantity() {
  const cartQuantity = calculateCartQuantity();

  cartQuantityElement.innerHTML = cartQuantity;
}

function displayAddedToCartAlert(productId) {
  const addedToCartAlert = document.querySelector(
    `.js-added-to-cart-${productId}`
  );

  addedToCartAlert.classList.add("added-to-cart-visible");

  const previousTimeoutId = addedMessageTimeouts[productId];
  if (previousTimeoutId) {
    clearInterval(addedMessageTimeouts[productId]);
  }

  const timeoutId = setTimeout(() => {
    addedToCartAlert.classList.remove("added-to-cart-visible");
  }, 2000);
  addedMessageTimeouts[productId] = timeoutId;
}
