// Add event listener for scroll
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    
    // Check if page is scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Add event listener for scroll
window.addEventListener('scroll', function () {
    const topbar = document.querySelector('.topbar');
    
    // Check if page is scrolled more than 50px
    if (window.scrollY > 50) {
        topbar.classList.add('scrolled');
    } else {
        topbar.classList.remove('scrolled');
    }
});