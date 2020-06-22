let $ = document.querySelector.bind(document);

let navMenu = $(".header");
let navLinks = document.querySelectorAll(".item-menu");

let scroll = 0;

document.addEventListener("scroll", activeNavBar);
// navLinks.forEach(linkElement => linkElement.addEventListener("click", smoothScroll));

function activeNavBar() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        navMenu.classList.add("scrolled");
    }
    else {
        navMenu.classList.remove("scrolled");
    }

    scroll = document.scrollingElement.scrollTop;
    activeLinkAfterScoll();
}

//ativar o link no menu de acordo com a seção atual
function activeLinkAfterScoll() {
    let sectionHome = document.getElementById('home').offsetTop;
    let sectionBanda = document.getElementById('bandas').offsetTop - 171;
    let sectionAlbum = document.getElementById('albuns').offsetTop - 176;
    let sectionSobre = document.getElementById('sobre').offsetTop - 147;
    let sectionContato = document.getElementById('contato').offsetTop - 318;

    setTimeout(() => {
        if (scroll >= sectionHome && scroll < sectionBanda) {
            navLinks[0].classList.add('light');
            removeActiveClass(0);

        }
        else if (scroll >= sectionBanda && scroll < sectionAlbum) {
            navLinks[1].classList.add('light');

            removeActiveClass(1);
        }
        else if (scroll >= sectionAlbum && scroll < sectionSobre) {
            navLinks[2].classList.add('light');

            removeActiveClass(2);
        }
        else if (scroll >= sectionSobre && scroll < sectionContato) {
            navLinks[3].classList.add('light');

            removeActiveClass(3);
        }
        else if (scroll >= sectionContato) {
            navLinks[4].classList.add('light');

            removeActiveClass(4);
        }
    }, 300);
}

function removeActiveClass(current) {
    let currentLink = navLinks[current];

    for (let i = 0; i < navLinks.length; i++) {
        if (navLinks[i] != currentLink) {
            navLinks[i].classList.remove('light');
        }
    }
}

