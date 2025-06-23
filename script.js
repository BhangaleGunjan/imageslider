// Array of image URLs (use your own links or local images)
const images = [
    'https://picsum.photos/id/1018/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1019/600/400',
    'https://picsum.photos/id/1020/600/400',
    'https://picsum.photos/id/1021/600/400'
];

let currentIndex = 0;
const slidesContainer = document.getElementById('slides');

// Load images into the slider
function loadSlides() {
    images.forEach((src) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${src}" alt="Slider Image">`;
        slidesContainer.appendChild(slide);
    });
}

// Update visible slide based on currentIndex
function showSlide(index) {
    const totalSlides = images.length;
    currentIndex = (index + totalSlides) % totalSlides; // Loop around
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Go to next slide
function nextSlide() {
    showSlide(currentIndex + 1);
}

// Go to previous slide
function prevSlide() {
    showSlide(currentIndex - 1);
}

// Automatic slideshow every 3 seconds
setInterval(() => {
    nextSlide();
}, 3000);

// Initialize the slider
loadSlides();
showSlide(currentIndex);