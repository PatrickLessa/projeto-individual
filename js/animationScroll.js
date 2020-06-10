const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'
const lightOn = 'light'
const menu = document.querySelectorAll('li.item-menu')
const sections = document.querySelectorAll('section.sessoes')

function animacaoScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight + 3) / 2)
    target.forEach(function (element) {
        if (windowTop > element.offsetTop) {
            element.classList.add(animationClass)
        } else {
            element.classList.remove(animationClass)
        }
    })
}

animacaoScroll();

if (target.length) {
    window.addEventListener('scroll', function () {
        animacaoScroll();
    })
}