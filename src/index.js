"use strict";

const burgermenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".second-line__burger");
const closeburger = document.querySelector(".close-button");

burger.addEventListener("click", () => {
    burgermenu.classList.remove("hide");
    burgermenu.classList.add("show");
});

closeburger.addEventListener("click", () => {
    burgermenu.classList.remove("show");
    burgermenu.classList.add("hide");
});
