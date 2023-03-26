const burgerBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')
const burgerBtnBars = document.querySelector('.burger-btn__bars')


const active = () => {
    nav.classList.toggle('nav--active')
    navItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active')
        })
    })
    handleAnimation();
}
const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.textContent = year
}
const handleObserve = () => {
    const currentSection = window.scrollY;
    allSections.forEach(section => {
        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 20) {
            burgerBtnBars.classList.add('black-bars-color')

        } else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            burgerBtnBars.classList.remove('black-bars-color')
        }
    })
}


const handleAnimation = () => {
    let delay = 0;
    navItem.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delay + 's';
        delay++;
    })
}
handleCurrentYear();


burgerBtn.addEventListener('click', active);
window.addEventListener('scroll', handleObserve)


