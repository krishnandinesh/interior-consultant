const toggle = document.getElementsByClassName('toggle-btn')[0];
const navbar = document.getElementsByClassName('nav-links')[0];
const bod = document.getElementById('body');

toggle.addEventListener('click', () => {
    navbar.classList.toggle('active')
    bod.classList.toggle('scroll')
    
})