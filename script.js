// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header && window.scrollY > 10) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else if (header) {
        header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
    }
});

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Page initialization
    console.log('Portfolio loaded successfully');
});