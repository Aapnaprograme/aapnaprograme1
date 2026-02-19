// ================= MENU TOGGLE =================
let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menuBtn.onclick = () => {
    navbar.classList.toggle('active');
}

// ================= SEARCH TOGGLE =================
let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = () => {
    searchForm.classList.toggle('active');
}

// ================= CLOSE MENU ON SCROLL =================
window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

// ================= HOME SLIDER =================
var homeSwiper = new Swiper(".home-slider", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".home .swiper-pagination",
        clickable: true,
    },
});

// ================= REVIEW SLIDER =================
var reviewSwiper = new Swiper(".review-slider", {
    loop: true,
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".review .swiper-pagination",
        clickable: true,
    },
});
