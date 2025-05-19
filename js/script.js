// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
       
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
   
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const project = document.getElementById('project').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
   
    // Here you would typically send the form data to a server
    // For this example, we'll just log it and show an alert
    console.log({ name, email, phone, project, subject, message });
   
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Animate skill circles on scroll
const skillItems = document.querySelectorAll('.skill-item');

function animateSkills() {
    skillItems.forEach(item => {
        const circle = item.querySelector('circle:nth-child(2)');
        const skillNumber = item.querySelector('.skill-number');
       
        // Reset animation
        circle.style.animation = 'none';
        void circle.offsetWidth; // Trigger reflow
        circle.style.animation = 'animate 1.5s linear forwards';
       
        // Animate number counting
        const target = parseInt(skillNumber.textContent);
        let current = 0;
        const increment = target / 50;
       
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                clearInterval(timer);
                current = target;
            }
            skillNumber.textContent = Math.floor(current) + '%';
        }, 20);
    });
}

// Intersection Observer for skill animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('#skills').forEach(section => {
    observer.observe(section);
});

// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('active');
    } else {
        scrollToTopBtn.classList.remove('active');
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
