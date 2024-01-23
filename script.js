const cardNumber = document.getElementById('number')
const numberInp = document.getElementById('card__number')

const cardName = document.getElementById('name')
const nameInp = document.getElementById('card__name')

const cardMount = document.getElementById('mount')
const mountInp = document.getElementById('card__mount')

const cardYear = document.getElementById('year')
const yearInp = document.getElementById('card__year')

const cardCvc = document.getElementById('cvc')
const cvcInp = document.getElementById('card__cvc')

const sumbitBtn =  document.getElementById('submit__btn')
const thxBtn = document.getElementById('thx-btn')

const form = document.querySelector('form')
const thank = document.querySelector('.thank__section')


function setCardNumber(e) {
    cardNumber.innerText = format(e.target.value)
}
function setCardName(e){
    cardName.innerText = e.target.value
}
function setCardMount(e){
    cardMount.innerText = e.target.value
}
function setCardYear(e){
    cardYear.innerText = e.target.value
}
function setCardCvc(e){
    cardCvc.innerText = e.target.value
}
function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

if (numberInp && nameInp && mountInp && yearInp && cvcInp) {
    numberInp.addEventListener('keyup', setCardNumber);
    nameInp.addEventListener('keyup', setCardName);
    mountInp.addEventListener('keyup', setCardMount);
    yearInp.addEventListener('keyup', setCardYear);
    cvcInp.addEventListener('keyup', setCardCvc);
}


function handleSubmit(e) {
    e.preventDefault();

    if(!nameInp.value){
        nameInp.classList.add('err')
        nameInp.nextElementSibling.classList.add('errmsg')
    }else{
        nameInp.classList.remove('err')
        nameInp.nextElementSibling.classList.remove('errmsg')
    }

    if(!numberInp.value){
        numberInp.classList.add('err')
        numberInp.nextElementSibling.classList.add('errmsg')
    }else{
        numberInp.classList.remove('err')
        numberInp.nextElementSibling.classList.remove('errmsg')
    }

    if(isNaN(numberInp.value)){
        numberInp.classList.add('err-2')
        numberInp.nextElementSibling.classList.add('errmsg-2')
    }else{
        numberInp.classList.remove('err-2')
        numberInp.nextElementSibling.classList.remove('errmsg-2')
    }


    if(!mountInp.value){
        mountInp.classList.add('err')
        mountInp.nextElementSibling.classList.add('errmsg')
    }else{
        mountInp.classList.remove('err')
        mountInp.nextElementSibling.classList.remove('errmsg')
    }
    
    if(!yearInp.value){
        yearInp.classList.add('err')
        yearInp.nextElementSibling.classList.add('errmsg')
    }else{
        yearInp.classList.remove('err')
        yearInp.nextElementSibling.classList.remove('errmsg')
    }

    if(!cvcInp.value){
        cvcInp.classList.add('err')
        cvcInp.nextElementSibling.classList.add('errmsg')
    }else{
        cvcInp.classList.remove('err')
        cvcInp.nextElementSibling.classList.remove('errmsg')
    }


   if(numberInp.value&&nameInp.value&&mountInp.value&&yearInp.value&&cvcInp.value){
        form.classList.add('hidden')
        thank.classList.remove('hidden')
    } else{
        form.classList.remove('hidden')
        thank.classList.add('hidden')
    }
}

sumbitBtn.addEventListener('click',handleSubmit)
thxBtn.addEventListener('click',() => {

    const ip = document.querySelectorAll('input')
    console.log(ip)
    form.classList.remove('hidden')
    thank.classList.add('hidden')
    ip.innerText = '';
})