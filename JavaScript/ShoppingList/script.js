const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearBtn = document.getElementById("clear");
const itemFilter = document.getElementById('filter');

const submitBtn = document.querySelector(".btn");

function displayItems() {
    const itemsFromStorage = getItemsFromStorage();
    itemsFromStorage.forEach(item => addItemToDOM(item));
    checkUI();
}

function addItem(e) {
    e.preventDefault();

    const newItem = itemInput.value;

    if (newItem === '') {
        alert("Please enter a valid input.");
        return;
    }
    
    addItemToDOM(newItem);

    addItemToStorage(newItem);

    checkUI();
    itemInput.value = "";
}

function addItemToDOM(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button);
    itemList.append(li);
}

function addItemToStorage(item) {
    let itemFromStorage = getItemsFromStorage();

    itemFromStorage.push(item);

    localStorage.setItem('items', JSON.stringify(itemFromStorage));
}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function getItemsFromStorage() {
    let itemFromStorage;

    if (localStorage.getItem('items') == null) {
        itemFromStorage = [];
    } else {
        itemFromStorage = JSON.parse(localStorage.getItem('items'));
    }

    return itemFromStorage;
}

function removeItem(e) {
    if (e.target.parentElement.classList.contains('remove-item')) {
        if (confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove(); 
            
            checkUI();
        }
    }
}

function clearItems(e) {
    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }

    checkUI();
}

function filterItems(e) {
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();

    items.forEach((item) => {
        const itemName = item.firstChild.textContent.toLowerCase();

        if (itemName.indexOf(text) != -1) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function checkUI() {
    const items = itemList.querySelectorAll('li');
    if (items.length === 0) {
        clearBtn.style.display = 'none';
        itemFilter.style.display = 'none';
    } else {
        clearBtn.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

function init() {
    itemForm.addEventListener('submit', addItem);
    itemList.addEventListener('click', removeItem);
    clearBtn.addEventListener('click', clearItems);
    itemFilter.addEventListener('input', filterItems);
    document.addEventListener('DOMContentLoaded', displayItems);

    checkUI();
}

init();