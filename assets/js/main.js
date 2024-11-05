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

document.addEventListener("DOMContentLoaded", function() {
  gsap.registerPlugin(ScrollTrigger);

  // Smooth horizontal scroll effect for the first three divs (horizontal slides)
  gsap.to(".horizontal-scroll", {
    xPercent: -30* (document.querySelectorAll(".horizontal-scroll .journey-item").length - 1),
    ease: "power1.inOut", // Smooth easing
    scrollTrigger: {
      trigger: ".horizontal-scroll",
      start: "top top",
      end: "+=800vw", // Adjusted for three slides in horizontal scrolling
      pin: true,
      scrub: 0.3, // Reduced scrub value for smoothness
    }
  });

  

  // Fade-in effect for each .journey-item with smooth transition when it comes into view
  gsap.utils.toArray(".journey-item").forEach((item) => {
    gsap.from(item, {
      opacity: 0,
      y: 150,
      duration: 1.2, // Slightly increased duration for smooth fade-in
      ease: "power1.out", // Smooth fade-in easing
      scrollTrigger: {
        trigger: item,
        start: "top 50%",
        toggleActions: "play none none reverse"
      }
    });
  });
});