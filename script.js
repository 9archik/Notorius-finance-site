
let burgerBtn = document.querySelector('.burger__btn');

let burgerMenu = document.querySelector('.burger__menu');

let body=document.getElementsByTagName('body')[0]

burgerBtn.addEventListener('click', () => { 
    burgerBtn.classList.toggle('active') 
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active');
=======
let burgerBtn = document.querySelector('.burger__btn');

let burgerMenu = document.querySelector('.burger__menu');

let body=document.getElementsByTagName('body')[0]

burgerBtn.addEventListener('click', () => { 
    burgerBtn.classList.toggle('active') 
    burgerMenu.classList.toggle('active')
    body.classList.toggle('active');
>>>>>>> 1b288fb4deee45a69d98493826b9d384e14dd474
})