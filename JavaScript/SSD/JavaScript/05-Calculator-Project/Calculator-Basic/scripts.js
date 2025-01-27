const buttons = document.querySelectorAll("button");
const resultElemet = document.querySelector(".result");

let calculation = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const element = button.innerHTML;

    if (element == "=") {
      calculation = eval(calculation);
      console.log(`calculation: ${calculation}`);
      resultElemet.innerHTML = calculation;
    } else if (element === "Clear") {
      calculation = "";
      console.log(`calculation: ${calculation}`);
      resultElemet.innerHTML = "0";
    } else {
      calculation += element;
      console.log(`calculation: ${calculation}`);
      resultElemet.innerHTML = calculation;
    }
  });
});

function updateCalculation() {}
