let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Swiper js
new Swiper('.swiper', {
    loop: true,
    spaceBetween: 30,

    // IPagination bullets
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});