function add(a = 0, b = 0) {
  return +a + +b;
}
function subtract(a = 0, b = 0) {
  return +a - +b;
}
function multiply(a = 0, b = 0) {
  return +a * +b;
}
function divide(a = 0, b = 1) {
  if (+b === 0) {
    return "please, just don't.";
  } else {
    return Math.round((+a / +b) * 1000000) / 1000000;
  }
}
function operate(a, operator = "+", b = 0) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
}
let displayText = "";
const display = document.querySelector(".display");
const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const result = document.querySelector(".result");
const clear = document.querySelector(".clear");
numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    displayText += e.target.dataset.number;
    display.textContent = displayText;
  });
});
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    displayText += ` ${e.target.dataset.operator} `;
    display.textContent = displayText;
  });
});
result.addEventListener("click", () => {
  operationArray = displayText.split(" ");
  while (operationArray.length != 1) {
    let newNumber = operate(
      operationArray[0],
      operationArray[1],
      operationArray[2]
    );
    operationArray.splice(0, 3, newNumber);
  }
  display.textContent = operationArray[0];
});
clear.addEventListener("click", () => {
  displayText = "";
  display.textContent = "";
});
