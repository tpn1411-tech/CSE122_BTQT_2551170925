const carouselElement = document.getElementById("travelCarousel");

new bootstrap.Carousel(carouselElement, {
    interval: 3000,
    ride: "carousel",
    touch: true,
    wrap: true
});
