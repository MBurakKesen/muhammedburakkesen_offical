// slideshow.js

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }

    setInterval(nextSlide, 5000); // Her 5 saniyede bir slayt geçişi yap

    // İsteğe bağlı: Otomatik geçişi durdurmak için fare ile slayta dokunulduğunda
    slides.forEach(slide => {
        slide.addEventListener("mouseover", function() {
            clearInterval(autoSlide);
        });
        slide.addEventListener("mouseleave", function() {
            autoSlide = setInterval(nextSlide, 5000);
        });
    });
});
