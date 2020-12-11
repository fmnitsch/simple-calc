const output = document.querySelector('.output');
const buttons = document.querySelectorAll('.btn');
const clear = document.querySelector('.clear');
const evaluate = document.querySelector('.evaluate');

const logOutput = ({target}) => {
    output.innerHTML += target.value;
};

buttons.forEach((button) => {
    button.addEventListener('click', logOutput);
});

clear.addEventListener('click', () => {
    output.innerHTML = '';
});

evaluate.addEventListener('click', () => {
    output.innerHTML = eval(output.innerHTML);
});