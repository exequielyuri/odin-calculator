function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("Hmm, I wonder why some people just loves dividing by zero 🤔");
    }
    return a / b;
}

function operate(a, b, operator) {
    if (operator == '+') {
        return add(a, b);
    } else if (operator == '-') {
        return subtract(a, b);
    } else if (operator == '*') {
        return multiply(a, b);
    } else if (operator == '/') {
        return divide(a, b);
    } else {
        console.log(`${operator} is an invalid operator.`);
    }
}

function isNumber(str) {
    return !isNaN(Number(str)) && str !== "";
}

function isFull() {
    return operands.length >= 2;
}

function resetAll() {
    displayContent = "";
    operands = [];
    result = "";
}

function updateDisplay() {
    display.textContent = displayContent;
}

function getResult() {
    result = operate(Number(operands[0]), Number(operands[1]), operator);
    operands = [];

    if (result % 1 !== 0) { // if has decimal
        result = Math.floor(result * 100) / 100; // round to two decimal places
    }

    if (result === Infinity) {
        result = "";
    }
    
    displayContent = `= ${result}`;
}

function execute(button) {
    const task = button.target.textContent

    switch (task) {
        case '+':
        case '-':
        case '*':
        case '/':
            if (isNumber(displayContent)) {
                operands.push(displayContent);
            }
            
            if (isFull()) {
                getResult();
                operands.push(result);
            } else {
                displayContent = "";
            }

            operator = task;
            break;
        case '=':
            if (isNumber(displayContent)) {
                operands.push(displayContent);
            }
            if (isFull()) {
                getResult();
            }
            break;
        case 'clear':
            resetAll();
            break;
        case '.':
            if (!displayContent.includes('.')) {
                displayContent += task;
            }
            break;
        default: // must be a number
            if (!isNumber(displayContent)) {
                displayContent = "";
            }
            displayContent += task;
    }
    
    updateDisplay();
}

let displayContent = "";
let operands = [];
let operator;
let result;

const display = document.getElementById("display");
const buttons = document.querySelectorAll("#calculator button");
buttons.forEach((button) => button.addEventListener("click", execute));