const elemInput = document.querySelector("#Input");
let num1AsString, num2AsString;
let operation;
let isCurrentFirstNum = true;
let isNewComputation = true;

function ClearInput() {
  elemInput.innerText = "";
  isCurrentFirstNum = true;
}

function appendToInput(char) {
  if (isNewComputation) {
    elemInput.innerText = '';
    isNewComputation = false;
  }
  elemInput.innerText += char;
}

function performMathOperation() {
  num2AsString = elemInput.innerText;
  const num1 = Number(num1AsString);
  const num2 = Number(num2AsString);
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error(`Unexpected operation : ${operation}`);
  }
  elemInput.innerText = result;
  isCurrentFirstNum = true;
  isNewComputation = true;
}

function MathOperation(chosen_op) {
  num1AsString = elemInput.innerText;
  elemInput.innerText = "";
  operation = chosen_op;
  isCurrentFirstNum = false;
}

// // defining elements:
// const result = 0
// const elemResult = document.querySelector("#result");
// const elemAdd = document.querySelector("#add");
// const elemSubstract = document.querySelector("#substract");
// const elemDivide = document.querySelector("#divide");
// const elemmultiply = document.querySelector("#multiply");
// let num1 = 0, num2 = 0, action = ""

// //   operation functions:
// function add() {
//   const sum = elemfirst_calc.valueAsNumber + elemsecond_calc.valueAsNumber;
//   elemResult.innerText = sum;
// }

// function substract() {
//   const substract =
//     elemfirst_calc.valueAsNumber - elemsecond_calc.valueAsNumber;
//   elemResult.innerText = substract;
// }

// function multiply() {
//   const multiply = elemfirst_calc.valueAsNumber * elemsecond_calc.valueAsNumber;
//   elemResult.innerText = multiply;
// }

// function divide() {
//   const divide = elemfirst_calc.valueAsNumber / elemsecond_calc.valueAsNumber;
//   elemResult.innerText = divide;
// }
// //   reset and clear information from input tab:
// function clearBoard() {
//     nullifyButtons()
//     num1 = 0
//     num2 = 0
//     action = ""
//     elemResult.innerText = ""
// }

// function result() {}
// function appendToInput(value) {
//   elemCalcInput.value += value;
// }
