// Smooth scroll functionality for links
document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.open(targetId, '_blank');
        }
    });
});

// Add more interactivity here (if needed later)

// Example: Button click animations
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
        this.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});
