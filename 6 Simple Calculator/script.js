let display = document.getElementById("display");
let currentValue = "";

function appendToDisplay(value) {
  currentValue += value;
  display.value = currentValue;
}

function clearDisplay() {
  currentValue = "";
  display.value = "";
}

function setOperation(op) {
    currentValue += ` ${op} `;
    display.value = currentValue;
}

function calculate() {
  const result = eval(currentValue.replace("^", "**"));
  display.value = result;
  currentValue = result.toString();
}

function squareRoot() {
    const result = Math.sqrt(parseFloat(currentValue));
    display.value = result;
    currentValue = result.toString();
}

function square() {
    const result = Math.pow(parseFloat(currentValue), 2);
    display.value = result;
    currentValue = result.toString();
}
