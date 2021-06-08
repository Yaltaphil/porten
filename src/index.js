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

const swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 3,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 6000,
    },
});