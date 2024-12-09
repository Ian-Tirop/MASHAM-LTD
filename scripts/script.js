// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Preloader
    const preloader = document.getElementById('preloader');
    window.addEventListener('load', () => {
        preloader.style.display = 'none';
    });

    // Hamburger Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Back to Top Button
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Section Reveal on Scroll
    const sections = document.querySelectorAll('.fade-in');

    const revealOnScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // Projects Filtering
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const filter = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    item.classList.add('fadeInUp');
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });




    
    // Testimonials Carousel
// Select all testimonial items
const testimonialItems = document.querySelectorAll('.testimonial-item');
let currentTestimonial = 0;

// Total number of testimonials
const totalTestimonials = testimonialItems.length;

// Initialize the first testimonial as active
testimonialItems[currentTestimonial].classList.add('active');

// Function to update the active testimonial
const updateTestimonial = () => {
    // Remove 'active' class from the current testimonial
    testimonialItems[currentTestimonial].classList.remove('active');
    
    // Update the index to the next testimonial
    currentTestimonial = (currentTestimonial + 1) % totalTestimonials;

    // Add 'active' class to the new current testimonial
    testimonialItems[currentTestimonial].classList.add('active');
};

// Set interval to change testimonials every 5 seconds
setInterval(updateTestimonial, 5000);





    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.querySelector('.form-message');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Clear previous messages
        formMessage.textContent = '';
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.style.display = 'none');

        // Validate fields
        let valid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            valid = false;
        }

        if (email.value.trim() === '' || !validateEmail(email.value.trim())) {
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        }

        if (message.value.trim() === '') {
            document.getElementById('messageError').style.display = 'block';
            valid = false;
        }

        if (valid) {
            // Simulate form submission
            formMessage.style.color = 'green';
            formMessage.textContent = 'Your message has been sent successfully!';
            contactForm.reset();
        } else {
            formMessage.style.color = 'red';
            formMessage.textContent = 'Please correct the errors above and try again.';
        }
    });

    function validateEmail(email) {
        // Simple email regex
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
