// Scroll reveal animation
function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        var windowHeight = window.innerHeight;
        var elementTop = element.getBoundingClientRect().top;
        var elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Navbar background change on scroll
function updateNavbar() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    }
}

// Add event listeners
window.addEventListener('scroll', reveal);
window.addEventListener('scroll', updateNavbar);

// Initial reveal call
reveal();
