const hamburgerMenu = document.querySelector('.hamburger__menu');
const mobileNav = document.querySelector('nav');
const closeMenu = document.querySelector('.close__menu');
const body = document.querySelector('.body__2');
const menuItems = document.querySelectorAll('li');

hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle('active')
    body.classList.toggle('active')
})
 
closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove('active')
    body.classList.remove('active')
})
  
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileNav.classList.remove('active')
        body.classList.remove('active')
    })
})

body.addEventListener("click", () => {
    mobileNav.classList.remove('active')
    body.classList.remove('active')
})
