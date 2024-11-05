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
  let result = 0;
  op1=+op1;
  op2=+op2;
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
  if (result % 1 != 0) Math.round(result * 1000) / 1000;
  return result;
}

let op1 = null;
let op2 = null;
let currentOperation=null;
let shouldResetScreen=false;

const currentOperationBox=document.querySelector(".currentoperationbox");
const previousOperationBox=document.querySelector(".previousoperationbox")

const buttons = document.querySelectorAll("button");

const display = document.querySelector(".display");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (buttons[i].classList.contains("num")) {
      handleOperand(buttons[i].innerText);
    } else if (buttons[i].classList.contains("operator")) {
      handleOperator(buttons[i].innerText);
    } else if (buttons[i].classList.contains("equal")) {
      evaluate();
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


function resetScreen(){
    currentOperationBox.textContent="";
    shouldResetScreen=false;
}

function handleOperand(num){
    if(currentOperationBox.textContent==='0'||shouldResetScreen){
        resetScreen();;
    }
    currentOperationBox.textContent+=num;
}

function handleOperator(symbol){
    if(currentOperation!==null) 
        evaluate();
    op1=currentOperationBox.textContent;
    currentOperation=symbol;
    previousOperationBox.textContent=`${op1} ${currentOperation}`;
    shouldResetScreen=true;
}

function evaluate(){
    if (currentOperation===null||shouldResetScreen)
        return;
    op2=currentOperationBox.textContent;
    currentOperationBox.textContent=operate(op1,op2,currentOperation);
    previousOperationBox.textContent=`${op1} ${currentOperation} ${op2} =`;
    currentOperation=null;
}

function handleAllClear(){
    currentOperationBox.textContent="0";
    previousOperationBox.textContent="";
    op1='';
    op2='';
    currentOperation=null;
}

function handleClear(){
    currentOperationBox.textContent=currentOperationBox.textContent.toString().slice(0,-1);
}

function handleDecimal(){
    if(shouldResetScreen)
        resetScreen();
    if(currentOperationBox.textContent==="")
        currentOperationBox.textContent='0';
    if(!currentOperationBox.textContent.includes('.'))
        currentOperationBox.textContent+='.';
}

function handleSign(){
    let num=+currentOperationBox.textContent;
    currentOperationBox.textContent=`${num*-1}`;
}