const header = document.querySelector('.header-second')

window.addEventListener('scroll', () => {
    header.classList.toggle('active', window.pageYOffset > 100)
})