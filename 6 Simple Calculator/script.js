let display = document.getElementById("display");
let currentValue = "";
let operation = "";
let previousValue = "";

function appendToDisplay(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  operation = "";
  previousValue = "";
  display.value = "";
}

function setOperation(op) {
  if (currentValue !== "") {
    if (previousValue !== "") {
      calculate();
    }
    operation = op;
    previousValue = currentValue;
    currentValue = "";
  }
}

function calculate() {
  if (previousValue !== "" && currentValue !== "") {
    let result;
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "/":
        result = prev / current;
        break;
      case "%":
        result = prev % current;
        break;
      case "^":
        result = Math.pow(prev, current);
        break;
    }
    display.value = result;
    previousValue = result.toString();
    currentValue = "";
    operation = "";
  }
}

function squareRoot() {
  if (currentValue !== "") {
    const result = Math.sqrt(parseFloat(currentValue));
    display.value = result;
    currentValue = result.toString();
  }
}

function square() {
  if (currentValue !== "") {
    const result = Math.pow(parseFloat(currentValue), 2);
    display.value = result;
    currentValue = result.toString();
  }
}
