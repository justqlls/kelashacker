// Toggle mobile menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger && navLinks) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
});

// Add scroll event to change header style
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.2)';
            header.style.background = 'rgba(44, 62, 80, 0.95)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
            header.style.background = '#2c3e50';
        }
    }
});

// Course card animation on scroll
const courseCards = document.querySelectorAll('.course-card');
const observerOptions = {
    threshold: 0.2
};

if (courseCards.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Initialize course card animations
    courseCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });
}

// Form validation for contact form
function validateForm(form) {
    let isValid = true;
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#e74c3c';
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

// Initialize any forms on the page
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        if (!validateForm(form)) {
            e.preventDefault();
            alert('Harap isi semua field yang wajib diisi.');
        }
    });
});

// Testimonial slider functionality
const testimonialCards = document.querySelectorAll('.testimonial-card');
let currentTestimonial = 0;

function showTestimonial(index) {
    testimonialCards.forEach(card => card.style.display = 'none');
    testimonialCards[index].style.display = 'block';
}

// Initialize testimonial display
if (testimonialCards.length > 0) {
    showTestimonial(0);
    
    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Set active navigation link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // Initialize testimonial filter
    initTestimonialFilter();
    
    // Initialize team filter
    initTeamFilter();
});

// Testimonial filter functionality
function initTestimonialFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const testimonialItems = document.querySelectorAll('.testimonial-card');
    
    if (filterButtons.length > 0 && testimonialItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter testimonials
                testimonialItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Team filter functionality
function initTeamFilter() {
    const filterButtons = document.querySelectorAll('.team-category-btn');
    const teamMembers = document.querySelectorAll('.team-member');
    
    if (filterButtons.length > 0 && teamMembers.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter team members
                teamMembers.forEach(member => {
                    if (filterValue === 'all' || member.getAttribute('data-category') === filterValue) {
                        member.style.display = 'block';
                    } else {
                        member.style.display = 'none';
                    }
                });
            });
        });
    }
}

// Animation for elements on scroll
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.facility-card, .category-card, .certification-item');
    const observerOptions = {
        threshold: 0.2
    };
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(element);
        });
    }
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', animateOnScroll);