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