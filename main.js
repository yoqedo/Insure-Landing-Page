
const headerBtn = document.querySelector('.mobile-menu');
const nav = document.querySelector('nav');

headerBtn.addEventListener('click', function () {
    nav.classList.toggle('active-menu');
})
