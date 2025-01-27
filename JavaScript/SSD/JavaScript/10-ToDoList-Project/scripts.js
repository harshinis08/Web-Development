const inputElement = document.querySelector(".js-input-todo");
const dateElement = document.querySelector(".js-input-date");

const addButton = document.querySelector(".js-add-button");
const clearListButton = document.querySelector(".clear-list");
const errorElement = document.querySelector(".error-info");

let todoItems = [
  { name: "Buffalo", dueDate: "2022-01-02" },
  { name: "Barre", dueDate: "2022-01-02" },
];

renderHTML();

addButton.addEventListener("click", () => {
  addItem();
  inputElement.value = "";
});

clearListButton.addEventListener("click", () => {
  clearList();
});

function clearList() {
  console.log("Clear list button clicked.");
  localStorage.removeItem("list");
  todoItems = [];
  renderHTML();
}

function addItem() {
  const inputValue = inputElement.value;
  const dateInput = dateElement.value;

  if (inputValue === "" || dateInput === "") {
    errorElement.innerHTML = `Need to enter an input value.`;
  } else {
    errorElement.innerHTML = "";
    todoItems.push({ name: inputValue, dueDate: dateInput });
    localStorage.setItem("list", JSON.stringify(todoItems));
    renderHTML();
  }
}

function renderHTML() {
  const todoItemsFromStorage = JSON.parse(localStorage.getItem("list"));
  todoItems = todoItemsFromStorage || [];
  let itemsElement = ``;

  for (let i = 0; i < todoItems.length; i++) {
    const { name, dueDate } = todoItems[i];

    const itemElement = `<div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-button">Delete</button>`;
    itemsElement += itemElement;
  }

  let divElement = document.querySelector(".js-todo-grid");
  divElement.innerHTML = itemsElement;

  const deleteButtons = document.querySelectorAll(".delete-button");

  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", deleteItem);
  }
}

function deleteItem() {
  const itemToDelete = this.parentNode.innerText.split("\n")[0];

  for (let i = 0; i < todoItems.length; i++) {
    if (todoItems[i].name === itemToDelete) {
      console.log(i);
      todoItems.splice(i, 1);
    }
  }
  localStorage.setItem("list", JSON.stringify(todoItems));
  renderHTML();
}
