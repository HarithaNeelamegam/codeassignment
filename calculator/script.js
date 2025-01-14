let currentInput = '';

function appendNumber(number) {
  currentInput += number;
  document.getElementById('display').value = currentInput;
}

function appendOperator(operator) {
  currentInput += operator;
  document.getElementById('display').value = currentInput;
}

function clearDisplay() {
  currentInput = '';
  document.getElementById('display').value = '';
}

function calculateResult() {
  try {
    let result = new Function('return ' + currentInput)();
    document.getElementById('display').value = result;
    currentInput = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentInput = '';
  }
}
