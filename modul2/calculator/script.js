let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendSymbol(symbol) {
    currentInput += symbol;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        updateDisplay();
    } catch (error) {
        display.textContent = 'Error';
        currentInput = '';
    }
}

function updateDisplay() {
    display.textContent = currentInput || '0';
}
