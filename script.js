const menu = document.querySelector(".burger-menu");
const p1 = document.querySelectorAll(".p1");
const p2 = document.querySelector(".burger-menu .p2");
const overlay = document.querySelector(".overlay");
const links = document.querySelector(".links.lowScreen");
menu.addEventListener("click", () => {
    p1[0].classList.toggle("transform-1");
    p1[2].classList.toggle("transform-2");
    p2.classList.toggle("hide");
    overlay.classList.toggle("overlay-show");
    links.classList.toggle("size");
})