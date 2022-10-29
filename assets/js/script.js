    // Mostrar/Ocultar Menu Bar

let btn = document.querySelector('.header__button.menu');
let menu = document.querySelector('.nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden__nav');

    btn.classList.toggle('menu-close');
    btn.classList.toggle('menu');
})

    // Seta a cor do background

let inputColor = document.querySelector('#color');
let bg = document.querySelector('.bg__write');

inputColor.addEventListener('input', () => {
    bg.style.backgroundColor = inputColor.value;
})