const textareaEle = document.getElementById("textarea");
const totalCounterEle = document.getElementById("total-counter");
const remainingCounterEle = document.getElementById("remaining-counter");

textareaEle.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter() {
    totalCounterEle.innerText = textareaEle.value.length;
    remainingCounterEle.innerText = textareaEle.getAttribute("maxLength")-textareaEle.value.length;
}