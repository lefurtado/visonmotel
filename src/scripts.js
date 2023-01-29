const nav = document.getElementsByClassName("nav__container")[0];
const navTop = nav.offsetTop;

window.onscroll = function () {
    fixOnTop();
}
function fixOnTop() {
    if (window.pageYOffset >= navTop) {
        nav.classList.add("fixOnTop");
    } else {
        nav.classList.remove("fixOnTop");
    }
}