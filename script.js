//global variables
const cardNumber = document.getElementById("card_number");

const cardholderName = document.querySelector('#cardholder_name');

const formElem = document.querySelector('form');

const inputElems = [...document.querySelectorAll('input')];




// error elements
const cardholder_error = document.querySelector('cardholder_error')




// input listener
inputElems.forEach((element) => {
    element.addEventListener('input', () => {

            const regx = /([A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])+/g;

            const regx2 = /([0-9])+/g
            
            if (element.id==='card_number') {
                if (regx.test(element.value)) {
                    element.style.borderColor = "var(--red)";
                    element.style.background = "transparent";
                } else {
                    element.style.borderColor = "";
                    element.style.background = "";
                } 
            }
            
            if (element.id==='cardholder_name') {
                if (regx2.test(element.value)) {
                element.style.borderColor = "var(--red)";
                element.style.background = "transparent";
                } else {
                    element.style.borderColor = "";
                    element.style.background = "";
                } 
            } 
        
            
})})






formElem.addEventListener('submit', (e) => {
    e.preventDefault();

})