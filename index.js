const hamburgerMenu = document.querySelector('.hamburger-menu')
const navMenu = document.querySelector('.nav')
const menuItems = document.querySelectorAll('.menu-item')

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})


menuItems.forEach(item => item.addEventListener('click', (e) => {
    navMenu.classList.remove('active') 
}))