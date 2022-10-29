let btn = document.querySelector('.header__button.menu');
let menu = document.querySelector('.nav');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden__nav');

    btn.classList.toggle('menu-close');
    btn.classList.toggle('menu');
})