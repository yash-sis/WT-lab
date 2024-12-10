let display = document.getElementById("display");
let currentValue = "";
let operation = "";
let isResult = false;

function appendToDisplay(value) {
  if (isResult && !isNaN(value)) {
    currentValue = value;
    isResult = false;
  } else {
    currentValue += value;
  }
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.value = "";
  isResult = false;
}

function setOperation(op) {
  if (currentValue !== "") {
    if (isResult) isResult = false;
    currentValue += ` ${op} `;
    display.value = currentValue;
  }
}

function calculate() {
  const result = eval(currentValue.replace("^", "**"));
  display.value = result;
  currentValue = result.toString();
  isResult = true;
}

function squareRoot() {
  if (currentValue !== "") {
    const result = Math.sqrt(parseFloat(currentValue));
    display.value = result;
    currentValue = result.toString();
    isResult = true;
  }
}

function square() {
  if (currentValue !== "") {
    const result = Math.pow(parseFloat(currentValue), 2);
    display.value = result;
    currentValue = result.toString();
    isResult = true;
  }
}
