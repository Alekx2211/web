var swiper = new Swiper(".container", {
    direction: "vertical",
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});
var swiper = new Swiper(".help", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 44,
    width:638,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bottom:0,
    },
    mousewheel: true,
    keyboard: true,
    breakpoints:{

        1280:{
            width: 600
        }
    }
});
var swiper = new Swiper(".exper", {
    slidesPerView: 2,
    loop: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        bottom:0,
    },
    mousewheel: true,
    keyboard: true,
});