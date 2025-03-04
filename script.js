// Mobile Menu Toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close Menu on Resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Close Menu on Link Click
navbar.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});
const pauseButton = document.getElementById('pause-slider');
const playButton = document.getElementById('play-slider');
const sliderItems = document.querySelectorAll('.slider .list .item');

pauseButton.addEventListener('click', () => {
    sliderItems.forEach(item => {
        item.style.animationPlayState = 'paused';
    });
});

playButton.addEventListener('click', () => {
    sliderItems.forEach(item => {
        item.style.animationPlayState = 'running';
    });
});
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 1, // Show 1 slide at a time
    spaceBetween: 20, // Space between slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {
            slidesPerView: 2, // Show 2 slides on tablets
        },
        1024: {
            slidesPerView: 3, // Show 3 slides on desktops
        },
    },
});