// Preloader
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById('preloader').style.display = 'none';
    }, 1500); // Adjust timeout as needed
});

// Mobile Menu Toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this.classList.toggle('active');

    // ARIA attributes for accessibility
    const isActive = navLinks.classList.contains('active');
    this.setAttribute('aria-expanded', isActive);
    navLinks.setAttribute('aria-hidden', !isActive);
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start' // Scroll to the top of the section
        });
    });
});

// Contact Form Submission with Formspree
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch('https://formspree.io/f/xgvwdloj', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                alert('Thank you for your message! We will get back to you soon.');
                form.reset();
            } else {
                alert('Oops! Something went wrong.');
            }
        }).catch(error => {
            console.error('Error:', error);
            alert('Oops! Something went wrong.');
        });
    });
});

// Smooth Scroll to Top Button (Optional)
const scrollToTopButton = document.getElementById('scroll-to-top');

if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
}
