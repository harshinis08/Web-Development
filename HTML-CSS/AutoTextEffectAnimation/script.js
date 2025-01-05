const containerEle = document.querySelector(".container");

const careers = ["Software Engineer", "Web Developer", "Data Engineer", "Python Developer"]

let index = 0;
let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;

    containerEle.innerHTML = `
        <h1>I am ${careers[index].slice(0,1) === "I" ? "an": "a"} ${careers[index].slice(0, characterIndex)}</h1>
    `;

    if (characterIndex === careers[index].length) {
        index++;
        characterIndex=0;
    }

    if (index === careers.length) {
        index = 0;
    }

    setTimeout(updateText, 400);
};
