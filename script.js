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

// Smooth scrolling for navigation links with navbar offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            // Dynamically get navbar height (accounts for minimized state)
            const navbar = document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 70;
            
            // Get target position
            const targetPosition = target.offsetTop - navbarHeight;
            
            window.scrollTo({
                top: Math.max(0, targetPosition), // Ensure it's not negative
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-menu');
            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.textContent = '☰';
                }
            }
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

// Navbar scroll effect - minimize on mobile when scrolling
let lastScroll = 0;
const navbar = document.querySelector('.navbar');
const isMobile = window.innerWidth <= 768;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // On mobile, minimize navbar when scrolling down
    if (isMobile || window.innerWidth <= 768) {
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    // Enhanced shadow when scrolled
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.3)';
    }
    
    lastScroll = currentScroll;
});

// Re-check mobile status on resize
window.addEventListener('resize', () => {
    const nowMobile = window.innerWidth <= 768;
    if (!nowMobile) {
        navbar.classList.remove('scrolled');
    }
});

