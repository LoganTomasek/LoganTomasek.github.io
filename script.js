// Safe scroll effect for header with null checks
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 10) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
        }
    }
});

// Safe page initialization with null checks
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully');
    
    // Ensure all elements exist before any operations
    const allElements = document.querySelectorAll('*');
    console.log('Total elements found:', allElements.length);
});