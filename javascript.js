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
  if (b == 0) {
    display.textContent = "Cannot divide by zero";
    return;
  } else {
    return a / b;
  }
}

function operate(op1, op2, operator) {
  displayValue = "";
  let result = 0;
  updateDisplay();
  switch (operator) {
    case "+":
      result = add(op1, op2);
      break;
    case "-":
      result = subtract(op1, op2);
      break;
    case "*":
      result = multiply(op1, op2);
      break;
    case "/":
      result = divide(op1, op2);
      break;
  }
  if (result % 1 != 0) result = result.toFixed(3);
  return result;
}
let displayValue = "";
let op1 = null;
let operator = null;
let operator2 = null;
let op2 = null;
const oprt = ["+", "-", "*", "/"];
let op2start;

const buttons = document.querySelectorAll("button");

const display = document.querySelector(".display");

function updateDisplay() {
  display.textContent = displayValue;
}
updateDisplay();

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].classList.contains("num")) {
      handleOperand(buttons[i].innerText);
    } else if (buttons[i].classList.contains("operator")) {
      handleOperator(buttons[i].innerText);
    } else if (buttons[i].classList.contains("equal")) {
      handleEqual();
    } else if (buttons[i].classList.contains("clear")) {
      handleClear();
    } else if (buttons[i].classList.contains("allclear")) {
      handleAllClear();
    } else if (buttons[i].classList.contains("sign")) {
      handleSign();
    } else if (buttons[i].classList.contains("decimal")) {
      handleDecimal();
    }
  });
}

function handleOperand(operand) {
  displayValue += operand;
  updateDisplay();
}

function handleOperator(symbol) {
  displayValue = displayValue + symbol;
  updateDisplay();
  operator = symbol;
  op2start = displayValue.indexOf(symbol) + 1;
  if (displayValue != "=") {
    op1 = +displayValue.slice(0, -1);
  }
}

function handleClear() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function handleAllClear() {
  displayValue = "";
  updateDisplay();
}

function handleEqual() {
  displayValue += "=";
  updateDisplay();
  let op2end = displayValue.indexOf("=");
  op2 = displayValue.slice(op2start, op2end);
  op2 = +op2;
  displayValue = operate(op1, op2, operator);
  updateDisplay();
}

function handleSign() {
  displayValue = displayValue * -1;
  updateDisplay();
}
