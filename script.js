// Carousel Logic
document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.querySelector(".carousel-images");
    const images = document.querySelectorAll(".carousel-images img");
    const prevButton = document.querySelector(".prev-btn");
    const nextButton = document.querySelector(".next-btn");

    let currentIndex = 0;
    const imageWidth = images[0].clientWidth;

    // Update the carousel position
    const updateCarousel = () => {
        carousel.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    };

    // Move to the previous image
    prevButton.addEventListener("click", () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    // Move to the next image
    nextButton.addEventListener("click", () => {
        currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Automatically resize on window resize
    window.addEventListener("resize", () => {
        updateCarousel();
    });
});