// Function to append values to the display
function appendToDisplay(value) {
  document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
  document.getElementById('display').value = '';
}

// Function to perform calculations
function calculate() {
  let display = document.getElementById('display');
  try {
      display.value = eval(display.value);
  } catch (e) {
      display.value = 'Error';
  }
}

// Function to calculate square
function square() {
  let display = document.getElementById('display');
  let value = display.value;
  display.value = Math.pow(parseFloat(value), 2);
}
