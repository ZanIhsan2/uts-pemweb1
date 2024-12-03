// Toggle class active
const navbarnav = document.querySelector('.navbar-nav')
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarnav.classList.toggle('active');
};

//Klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu')

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarnav.contains(e.target)) {
        navbarnav.classList.remove('active');
    }
});

// Animasi slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

showSlide(currentIndex);
setInterval(nextSlide, 3000);