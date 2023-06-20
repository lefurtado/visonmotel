const nav = document.getElementsByClassName("nav__container")[0];
const navTop = nav.offsetTop;

window.onscroll = function () {
    navTop > 0 ? fixOnTop() : responsivo();
}

function fixOnTop() {
    if (window.scrollY >= navTop) {
        nav.classList.add("fixOnTop");
    } else {
        nav.classList.remove("fixOnTop");
    }
}

function responsivo() {
    if (window.scrollY > navTop) {
        nav.classList.add("background__nav");
    } else {
        nav.classList.remove("background__nav");
    }
}