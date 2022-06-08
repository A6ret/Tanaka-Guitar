const menuBtn = document.querySelector('.menu-btn');
const navLink = document.querySelector('.nav-links');
const logo2 = document.querySelector('.logo2');

menuBtn.addEventListener('click', () => {
    navLink.classList.toggle('mobile-menu');
    logo2.classList.toggle('mobile-menu');

    if (logo2.classList.contains('mobile-menu')) {
        menuBtn.src = './image/close.svg';
    } else menuBtn.src = './image/menu.svg';
});
