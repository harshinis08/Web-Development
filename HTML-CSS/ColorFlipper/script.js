const colors = ["#DBB5B5", "#B3C8CF", "#FFAF45", "#DCA47C"];

const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", function() {
    const output = getRandomNumber();

    document.body.style.backgroundColor = colors[output];
    color.textContent = colors[output]
});


function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);  
}