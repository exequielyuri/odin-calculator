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

function addToDisplay(button) {
    const text = button.target.textContent;
    displayContent += text;
    updateDisplay();
}

function updateDisplay() {
    display.textContent = displayContent;
}

let displayContent = "";

const display = document.getElementById("display");
const buttons = document.querySelectorAll("#buttons button");
buttons.forEach((button) => button.addEventListener("click", addToDisplay));