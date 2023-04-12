/* These lines of code are selecting specific elements from the HTML document using their class or tag names and assigning them to variables using the `querySelector` and `querySelectorAll` methods. */
const hamburgerMenu = document.querySelector('.hamburger__menu');
const mobileNav = document.querySelector('nav');
const closeMenu = document.querySelector('.close__menu');
const body = document.querySelector('.body__2');
const menuItems = document.querySelectorAll('li');


/* These lines of code are adding event listeners to the hamburger menu and close menu elements. 

When the hamburger menu is clicked, it toggles the 'active' class on the mobileNav and body elements.
When the close menu is clicked, it removes the 'active' class from the mobileNav and body elements. */
hamburgerMenu.addEventListener("click", () => {
    mobileNav.classList.toggle('active')
    body.classList.toggle('active')
})
 
closeMenu.addEventListener("click", () => {
    mobileNav.classList.remove('active')
    body.classList.remove('active')
})
  
/* This code is adding an event listener to each item in the `menuItems` NodeList. When an item is
clicked, it removes the 'active' class from the `mobileNav` and `body` elements, effectively closing
the mobile navigation menu. */
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileNav.classList.remove('active')
        body.classList.remove('active')
    })
})

/* This code is adding an event listener to the `body` element. When the body is clicked, it removes
the 'active' class from the `mobileNav` and `body` elements, effectively closing the mobile
navigation menu. */
body.addEventListener("click", () => {
    mobileNav.classList.remove('active')
    body.classList.remove('active')
})
