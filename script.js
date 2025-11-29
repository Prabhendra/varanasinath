// JavaScript for future interactivity
// Currently no JS needed for basic navbar

// Example: Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Example: Log when icons are clicked
document.querySelectorAll('.nav-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        console.log('Icon clicked:', this.classList[0]);
    });
});
