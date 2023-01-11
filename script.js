//global variables

const cardholderName = document.querySelector('#cardholder_name');

const formElem = document.querySelector('form');

const inputElems = [...document.querySelectorAll('input')];

const userName = document.querySelector('h1');

const userDigits = document.querySelector('.digits');

const cNum = document.querySelector('.cvc_no');

const expDate = document.querySelector('.card_date');

const mm = document.querySelector('#exp_date');

const yy = document.querySelector('#month_year');





// error elements
const cardholder_error = document.querySelector('.cardholder.error');

const cardnumber_error = document.querySelector(".card_number.error");

const cvc_number_error = document.querySelector(".cvc_number.error");

const exp_error = document.querySelector(".exp_date.error");






// input listener
inputElems.forEach((element) => {
    element.addEventListener('input', () => {

            const regx = /([A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])+/g;

            const regx2 = /([0-9])+/g
            
            if (element.id==='card_number') {
                if (regx.test(element.value)) {
                    element.style.borderColor = "var(--red)";
                    element.style.background = "transparent";
                    cardnumber_error.textContent = 'Wrong format numbers only'
                } else {
                    element.style.borderColor = "";
                    element.style.background = "";
                    cardnumber_error.textContent = ''
                } 
                if (element.value == '') {
                    userDigits.textContent = '0000 0000 0000 0000'
                }else{
                    userDigits.textContent = element.value.match(/.{1,4}/g).join(' ')
                }
            }
            
            if (element.id==='cardholder_name') {
                if (regx2.test(element.value)) {
                element.style.borderColor = "var(--red)";
                element.style.background = "transparent";
                cardholder_error.textContent = 'Wrong format letters only'
         
                } else {
                    element.style.borderColor = "";
                    element.style.background = "";
                    cardholder_error.textContent = '';
                    
                } 

                if (element.value == '') {
                    userName.textContent = element.placeholder.slice(5)
                }else{
                    userName.textContent = element.value
                }

                
            } 
            
            if (element.id === 'cvc_number'){

                if(element.value === ''){
                    cNum.textContent = '000';
                    element.style.borderColor = "";
                    element.style.background = "";

                } else {
                    cNum.textContent = element.value
                    cvc_number_error.textContent=''
                }

                
            }

            if (element.id === 'exp_date' || element.id === 'month_year') {
                if (element.value == '') {
                    exp_error.textContent = ''
                    document.querySelector('.month_year_').style.marginLeft = ''
                }
            }

            expDate.textContent= `${mm.value}/${yy.value}`
})})






formElem.addEventListener('submit', (e) => {
    e.preventDefault();

    let cvc_number = document.getElementById('cvc_number');

    let card_number = document.getElementById('card_number');

    const regx = /([A-Za-z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])+/g;

    console.log(card_number, cvc_number, regx)
  

    if(cardholderName.value === '') {
        cardholderName.style.borderColor = "var(--red)";
        cardholderName.style.background = "transparent";
        cardholder_error.textContent = 'Cant be blank'
        return
    
    } 
    if(!regx.test(cardholderName.value)) {
        cardholderName.style.borderColor = "var(--red)";
        cardholderName.style.background = "transparent";
        cardholder_error.textContent = 'Wrong format, letters only'
        return
    }
    if(card_number.value === '') {
        card_number.style.borderColor = "var(--red)";
        card_number.style.background = "transparent";
        cardnumber_error.textContent = 'Cant be blank'  
        return
    }

    if (card_number.value.length < 16){
        card_number.style.borderColor = "var(--red)";
        card_number.style.background = "transparent";
        cardnumber_error.textContent = 'Incorrect' 
        return
    }
    if(regx.test(card_number.value)) {
        card_number.style.borderColor = "var(--red)";
        card_number.style.background = "transparent";
        cardnumber_error.textContent = 'Wrong format, numbers only' 
        
    }
    if (mm.value === ''|| yy.value === '') {
         mm.style.borderColor = "var(--red)";
         mm.style.background = "transparent";
         yy.style.borderColor = "var(--red)";
         yy.style.background = "transparent";
         exp_error.textContent = 'Cant be blank'

         document.querySelector('.month_year_').style.marginLeft = '-.7em'
         
    }
    if (cvc_number.value === ''){
    
        cvc_number.style.borderColor = "var(--red)";
        cvc_number.style.background = "transparent";
        cvc_number_error.textContent = 'Cant be blank'
        return
        
    }
    if (regx.test(cvc_number.value)) {
         cvc_number.style.borderColor = "var(--red)";
         cvc_number.style.background = "transparent";
         cvc_number_error.textContent = 'Wrong format, numbers only'
         return
     }
        
//  complete screen
if(formElem.checkValidity()) {
 
    document.querySelector('form').innerHTML = `   <div class="complete">
     <img src="../images/icon-complete.svg" alt="" width="70px">
    <h4 >THANK YOU! </h4>
    <h5 style="text-transform: uppercase; margin-top:-.6em;">${ cardholderName.value}</h5>
     <p style="margin-top: -.9em;">We've added your card detailsp>
     <a href="index.html" class='continueLink'>Continue</a>
</div>`

// formElem.reset()

}
   

})

