// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.


const input = document.getElementById('inputtext');
const buttons = document.querySelectorAll('button');
function calculate(expression) {
    console.log(expression);
    try {
        return new Function('return ' + expression)();
    } catch (error) {
        return 'Malformed Operation';
    }
}
function operation(buttonValue) {
    if (input.value === 'Malformed Operation' || input.value === 'Infinity' || input.value === 'undefined') {
        input.value = '';
    }
    if (buttonValue === 'AC') {
        input.value = '';
    } else if (buttonValue === '⌫') {
        input.value = input.value.slice(0, -1);
    } else if (buttonValue === '=') {
        input.value = calculate(input.value);
    } else {
        input.value += buttonValue;
    }
}
buttons.forEach(button => {
    let buttonValue = button.innerText;
    button.addEventListener('click', function () {
        operation(buttonValue);
    });
});