
document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openSidebarBtn = document.getElementById('openSidebar');
    const closeSidebarBtn = document.getElementById('closeSidebar');

    // Open sidebar
    openSidebarBtn.addEventListener('click', function() {
        sidebar.classList.add('active');
    });

    // Close sidebar
    closeSidebarBtn.addEventListener('click', function() {
        sidebar.classList.remove('active');
    });

    // Close sidebar when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnBurgerIcon = openSidebarBtn.contains(event.target);
        
        if (!isClickInsideSidebar && !isClickOnBurgerIcon && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });
});

// Optional: Smooth scroll for the scroll indicator
document.querySelector('.hero-scroll-indicator').addEventListener('click', () => {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
});

// Optional: Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Optional: Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '50px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.about-text-content, .about-image-wrapper').forEach(el => {
    observer.observe(el);
});

// services
// Optional: Intersection Observer for scroll animations
const aobserverOptions = {
    threshold: 0.1,
    rootMargin: '50px'
};

const aobserver = new IntersectionaObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, aobserverOptions);

// Observe elements
document.querySelectorAll('.services-header, .service-card').forEach(el => {
    aobserver.observe(el);
});

// footer
// Optional: Intersection Observer for scroll animations
const footerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.footer-section').forEach(section => {
    footerObserver.observe(section);
});