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
        delay: 3500,
    },
    allowTouchMove: true,

    breakpoints: {
        376: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 3,
        },
        1109: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 3,
        },
    },
});

const swiper2 = new Swiper(".mySwiper2", {
    breakpoints: {
        376: {
            slidesPerView: 1,
            slidesPerColumn: 1,
        },
        767: {
            slidesPerView: 3,
            slidesPerColumn: 1,
        },
        1109: {
            slidesPerView: 3,
            slidesPerColumn: 1,
        },
        1500: {
            slidesPerView: 4,
            slidesPerColumn: 2,
        },
    },
    loop: false,
    allowTouchMove: true,
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
