const mainTitle = document.querySelector('#title');
let curValue = 0;
const btnDecrement = document.querySelector('#Decrement');
const btnreset = document.querySelector('#reset');
const btnincrease = document.querySelector('#increase');

btnincrease.addEventListener('click' , () => {
    curValue++;
    mainTitle.textContent = curValue;
});

btnDecrement.addEventListener('click' , () => {
    curValue--,
    mainTitle.textContent = curValue;
});

btnreset.addEventListener('click' , () => {
    curValue = 0,
    mainTitle.textContent = curValue;
});

