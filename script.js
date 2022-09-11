
let burgerBtn = document.querySelector('.burger__btn');

let burgerMenu = document.querySelector('.burger__menu');

let body=document.getElementsByTagName('body')[0]

burgerBtn.addEventListener('click', () => { 
    burgerBtn.classList.toggle('active') 
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active');
}
let burgerBtn = document.querySelector('.burger__btn');

let burgerMenu = document.querySelector('.burger__menu');

let body=document.getElementsByTagName('body')[0]

burgerBtn.addEventListener('click', () => { 
    burgerBtn.classList.toggle('active') 
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active');

})
