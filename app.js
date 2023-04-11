const hamburgerMenu = document.querySelector('.menu__icon')
const mobileNav = document.querySelector('nav');
const closeMenu = document.querySelector('.close__menu');
const menu = document.querySelectorAll('li');


hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle('active')
    document.querySelector('body').classList.toggle('nav-open')
})

closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove('active')
    document.querySelector('body').classList.remove('nav-open')
})

menu.forEach(menu => {
    menu.addEventListener("click", () => {
        mobileNav.classList.remove('active')
        document.querySelector('body').classList.remove('nav-open')
    })
})