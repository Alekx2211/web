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
    },
    mousewheel: true,
    keyboard: true,
});