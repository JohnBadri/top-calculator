let displayValue = null;
let inputValue = null;
let lastOperator = null;
const nButtons = document.querySelectorAll(".number");
const oButtons = document.querySelectorAll(".operator");
const currentOperand = document.querySelector(".currentOperand");
const calculatedOperand = document.querySelector(".calculatedOperand");
const clear = document.querySelector(".ac");
const del = document.querySelector(".del");
const equals = document.querySelector(".equals");

// Addition function
let addition = (a, b) => a + b;

// Subtraction function
let subtraction = (a, b) => a - b;

// multiplication function
let multiplication = (a, b) => a * b;

// Division function
let division = (a, b) => a / b;

// Remainder function
let remainder = (a, b) => a % b;

// Operate function
let operate = function (operator, inputValue, displayValue) {
  let result;
  switch (operator) {
    case "+":
      result = addition(parseFloat(inputValue), parseFloat(displayValue));
      break;
    case "-":
      result = subtraction(parseFloat(inputValue), parseFloat(displayValue));
      break;
    case "*":
      result = multiplication(parseFloat(inputValue), parseFloat(displayValue));
      break;
    case "/":
      if (parseFloat(displayValue) !== 0) {
        result = division(parseFloat(inputValue), parseFloat(displayValue));
      } else {
        result = "Cannot divide by zero";
      }
      break;
    case "%":
      result = remainder(parseFloat(inputValue), parseFloat(displayValue));
      break;
    default:
      result = "Invalid Operator";
  }
  currentOperand.textContent = result;
  displayValue = result;
  return result;
};

equals.addEventListener("click", () => {
  if (lastOperator && inputValue && displayValue !== null) {
    displayValue = operate(
      lastOperator,
      displayValue,
      currentOperand.textContent
    );
    calculatedOperand.textContent = displayValue;
    currentOperand.textContent = null;

    // Reset the lastOperator and inputValue
    lastOperator = null;
    inputValue = null;
  }
});

clear.addEventListener("click", () => {
  // make everything back to null
  currentOperand.textContent = null;
  calculatedOperand.textContent = null;
  inputValue = null;
  displayValue = null;
});

del.addEventListener("click", () => {
  // use create array, take out the last number, then make back to string.
  if (currentOperand.textContent) {
    let arr = currentOperand.textContent.slice(0, -1);
    currentOperand.textContent = arr;
  }
});

nButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // dont let input more than 18 numbers
    if (currentOperand.textContent.length < 18) {
      // allow input of numbers in input field
      currentOperand.textContent += button.textContent;
    }
  });
});

oButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperand.textContent) {
      inputValue = currentOperand.textContent;
      // If we already have an operator pressed, perform that calculation
      if (lastOperator && displayValue !== null) {
        displayValue = operate(lastOperator, displayValue, inputValue);
      } else {
        // If no operator has been pressed yet, set the display value
        displayValue = inputValue;
      }
      lastOperator = button.id;
      // Update display
      calculatedOperand.innerHTML = `${displayValue} <span style='font-size: 14px;'>${button.textContent}</span>`;
      currentOperand.textContent = null;
    }
  });
});
