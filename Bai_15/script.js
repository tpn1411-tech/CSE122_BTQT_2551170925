const expressionDisplay = document.getElementById("expression");
const resultDisplay = document.getElementById("result");
const buttons = document.querySelectorAll(".keypad button");

let currentNumber = "";
let firstNumber = 0;
let operator = "";
let isNewNumber = false;

function updateDisplay() {
    if (operator !== "") {
        expressionDisplay.textContent =
            firstNumber + " " + operator + " " + (currentNumber || "");
    } else {
        expressionDisplay.textContent = currentNumber || "0";
    }
}
function clearCalculator() {
    currentNumber = "";
    firstNumber = 0;
    operator = "";
    isNewNumber = false;

    expressionDisplay.textContent = "0";
    resultDisplay.textContent = "0";
}

function appendNumber(value) {
    if (isNewNumber) {
        currentNumber = "";
        isNewNumber = false;
    }

    if (value === "." && currentNumber.includes(".")) {
        return;
    }

    if (value === "." && currentNumber === "") {
        currentNumber = "0";
    }

    currentNumber += value;
    updateDisplay();
}

function chooseOperator(value) {
    if (currentNumber === "") {
        return;
    }

    firstNumber = Number(currentNumber);
    operator = value;
    isNewNumber = true;

    expressionDisplay.textContent = firstNumber + " " + operator;
}

function calculate() {
    if (currentNumber === "" || operator === "") {
        return;
    }

    const secondNumber = Number(currentNumber);
    let result = 0;

    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        if (secondNumber === 0) {
            resultDisplay.textContent = "Không thể chia 0";
            return;
        }

        result = firstNumber / secondNumber;
    } else if (operator === "%") {
        result = firstNumber % secondNumber;
    }

    expressionDisplay.textContent =
        firstNumber + " " + operator + " " + secondNumber;

    resultDisplay.textContent = result;

    currentNumber = String(result);
    operator = "";
    isNewNumber = true;
}

function deleteLast() {
    if (isNewNumber) {
        return;
    }

    currentNumber = currentNumber.slice(0, -1);
    updateDisplay();
}

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const value = button.dataset.value;
        const action = button.dataset.action;

        if (action === "clear") {
            clearCalculator();
        } else if (action === "calculate") {
            calculate();
        } else if (action === "backspace") {
            deleteLast();
        } else if (action === "parentheses") {
            return;
        } else if (value !== undefined) {
            if (["+", "-", "*", "/"].includes(value)) {
                chooseOperator(value);
            } else {
                appendNumber(value);
            }
        }
    });
});
