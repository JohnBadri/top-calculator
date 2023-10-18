let displayValue = null;
let calculatedValue = null;
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
let operate = function (operator, fNumber, sNumber) {};

equals.addEventListener("click", () => {
  if (currentOperand.textContent) {
    calculatedOperand.innerHTML = `${currentOperand.textContent} `;
    if (calculatedValue) {
    } else {
      calculatedValue = calculatedOperand.textContent;
    }
    currentOperand.textContent = null;
  }
});

clear.addEventListener("click", () => {
  currentOperand.textContent = null;
  calculatedOperand.textContent = null;
  calculatedValue = null;
});

del.addEventListener("click", () => {
  if (currentOperand.textContent) {
    let arr = currentOperand.textContent.slice(0, -1);
    currentOperand.textContent = arr;
  }
});

nButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperand.textContent.length < 18) {
      currentOperand.textContent += button.textContent;
    }
  });
});

oButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (currentOperand.textContent) {
      calculatedOperand.innerHTML = `${currentOperand.textContent} <span style='font-size: 14px;'>${button.textContent}</span>`;
      if (calculatedValue) {
      } else {
        calculatedValue = calculatedOperand.textContent;
      }
      currentOperand.textContent = null;
    }
  });
});
