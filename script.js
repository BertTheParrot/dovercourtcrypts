// Mobile menu toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenuToggle && navMenu) {
    mobileMenuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        // Change icon
        this.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close menu when clicking a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            mobileMenuToggle.textContent = '☰';
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // In a real application, this would send data to a server
        console.log('Form submitted:', formData);
        
        // Show success message (in prototype)
        alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.\n\n(Note: This is a prototype - form submission is simulated)`);
        
        // Reset form
        contactForm.reset();
    });
}

// Merchandise cart simulation
let cart = [];

document.querySelectorAll('.btn-merch').forEach(button => {
    button.addEventListener('click', function() {
        const merchItem = this.closest('.merch-item');
        const itemName = merchItem.querySelector('h3').textContent;
        const itemPrice = merchItem.querySelector('.merch-price').textContent;
        
        cart.push({ name: itemName, price: itemPrice });
        
        // Update button text temporarily
        const originalText = this.textContent;
        this.textContent = 'Added!';
        this.style.background = '#4CAF50';
        
        setTimeout(() => {
            this.textContent = originalText;
            this.style.background = '';
        }, 2000);
        
        console.log('Cart:', cart);
        
        // In a real application, this would update a cart UI
        alert(`${itemName} added to cart!\n\n(Note: This is a prototype - cart functionality is simulated)`);
    });
});

// Scroll animations (simple fade-in effect)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    const navbar = document.querySelector('.navbar');
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
    
    lastScroll = currentScroll;
});

