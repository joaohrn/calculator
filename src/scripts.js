function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
function operate(a, operator, b) {
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
