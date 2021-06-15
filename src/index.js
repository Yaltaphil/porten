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
    loop: true,
    autoplay: {
        delay: 2500,
    },

    breakpoints: {
        376: {
            slidesPerView: 1,
            allowTouchMove: true,
        },
        767: {
            slidesPerView: 3,
            // spaceBetween: 60,
            allowTouchMove: true,
        },
        1109: {
            allowTouchMove: true,
            // spaceBetween: 10,
            slidesPerView: 3,
        },
        1500: {
            allowTouchMove: true,
            // spaceBetween: 23,
            slidesPerView: 3,
        },
    },

});

const swiper2 = new Swiper(".mySwiper2", {
    breakpoints: {
        376: {
            slidesPerView: 1,
            slidesPerColumn: 1,
            allowTouchMove: true,
        },
        767: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            // spaceBetween: 10,
            allowTouchMove: true,
        },
        1109: {
            slidesPerView: 3,
            slidesPerColumn: 1,
            // spaceBetween: 10,
            allowTouchMove: true,
        },
        1500: {
            // spaceBetween: 23,
            slidesPerView: 4,
            slidesPerColumn: 2,
        },
    },
    resizeReInit: true,
    watchOverflow: true,
});

// reinit swiper on window resising
// window.addEventListener("resize", () => {
//     console.log("reinit swiper!");
//     if (window.innerWidth >= 1500) {
//         swiper2.update();
//         swiper2.destroy();
//     }
// });
