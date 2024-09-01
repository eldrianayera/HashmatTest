const num1Input = document.querySelector(".num1");
const num2Input = document.querySelector(".num2");
const submitButton = document.querySelector(".calculate");
const resultText = document.querySelector(".result");
const historyText = document.querySelector(".history");
const clearButton = document.querySelector(".clear");
let listNumber = 1;
function calculate() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("You have to input a number");
    return;
  }
  const diff = Math.abs(num1 - num2);
  resultText.innerText = diff;

  historyText.innerText += `\n${listNumber} Number 1 (${num1}) , Number 2 (${num2}) , output = ${diff}`;
  listNumber++;

  num1Input.value = "";
  num2Input.value = "";
}

function clear() {
  historyText.innerText = "History :";
  num1Input.value = "";
  num2Input.value = "";
  resultText.innerText = "";
}

submitButton.addEventListener("click", calculate);
clearButton.addEventListener("click", clear);
