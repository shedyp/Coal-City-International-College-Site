let currentSlide = 0;
const images = document.querySelectorAll(".carousel-image");

function showSlide(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    showSlide(currentSlide);
}

// Change image every 3 seconds
setInterval(nextSlide, 3000);
