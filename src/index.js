"use strict";

const burgermenu = document.querySelector(".burger-menu");
const burger = document.querySelector(".second-line__burger");
const closeburger = document.querySelector(".close-button");
const body = document.body;

burger.addEventListener("click", () => {
    burgermenu.classList.remove("hide");
    burgermenu.classList.add("show");
    body.style.overflowY = "hidden";
});

closeburger.addEventListener("click", () => {
    burgermenu.classList.remove("show");
    burgermenu.classList.add("hide");
    body.style.overflowY = "scroll";
});

const swiper1 = new Swiper(".mySwiper1", {
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 3000,
    },

    breakpoints: {
        767: {
            slidesPerView: 1,
            allowTouchMove: true,
        },
        1108: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 3,
        },
        1499: {
            allowTouchMove: true,
            spaceBetween: 50,
            slidesPerView: 3,
        },
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    breakpoints: {
        767: {
            slidesPerView: 1,
            allowTouchMove: true,
        },
        1108: {
            allowTouchMove: true,
            spaceBetween: 10,
            slidesPerView: 3,
        },
        1499: {
            allowTouchMove: true,
            spaceBetween: 23,
            slidesPerView: 4,
        },
    },
    // centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});
