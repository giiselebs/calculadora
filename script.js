let display = document.getElementById('display');
let currentInput = '';
let currentOperation = null;
let previousValue = null;

function appendNumber(number) {
    if (number === '/' || number === '*' || number === '-' || number === '+') {
        if (currentInput === '' && number !== '-') return;
        if (currentOperation !== null) {
            calculateResult();
        }
        previousValue = parseFloat(currentInput);
        currentInput = '';
        currentOperation = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function calculateResult() {
    if (currentOperation === null || currentInput === '' || previousValue === null) return;
    let result;
    let currentNumber = parseFloat(currentInput);
    
    switch (currentOperation) {
        case '+':
            result = previousValue + currentNumber;
            break;
        case '-':
            result = previousValue - currentNumber;
            break;
        case '*':
            result = previousValue * currentNumber;
            break;
        case '/':
            result = previousValue / currentNumber;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    currentOperation = null;
    previousValue = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperation = null;
    previousValue = null;
    updateDisplay();
}

function updateDisplay() {
    display.innerText = currentInput || '0';
}
