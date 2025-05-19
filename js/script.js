// Scroll reveal effect
window.addEventListener('scroll', () => {
  document.querySelectorAll('.blog-card').forEach(card => {
    const position = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight - 100) {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }
  });
});

// Smooth scroll behavior for navigation
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Form validation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
    } else {
      alert('Message sent successfully!');
      form.reset();
    }
  });
}
