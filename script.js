document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for section reveal
    const sections = document.querySelectorAll('.fade-in');
    const backToTopBtn = document.getElementById('backToTop');

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                section.classList.add('show');
            }
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Carousel Functionality
    const carouselContainer = document.querySelector('.carousel-container');
    let currentIndex = 0;

    function updateCarousel() {
        carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : carouselContainer.children.length - 1;
        updateCarousel();
    });

    document.querySelector('.next').addEventListener('click', () => {
        currentIndex = (currentIndex < carouselContainer.children.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Call section reveal on scroll
    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial call for sections already in view
});
