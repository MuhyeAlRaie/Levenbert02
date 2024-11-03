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
  
    // Horizontal scroll effect for the first three divs (horizontal slides)
    gsap.to(".horizontal-scroll", {
      xPercent: -100 * (document.querySelectorAll(".horizontal-scroll .journey-item").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-scroll",
        start: "top top",
        end: () => "+=" + (window.innerWidth * 3), // 3 slides, each taking up 100vw
        pin: true,
        scrub: true,
      }
    });
  
    // Vertical scroll effect for the last three divs (vertical slides)
    gsap.to(".vertical-scroll", {
      yPercent: -100 * (document.querySelectorAll(".vertical-scroll .journey-item").length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".vertical-scroll",
        start: "top top",
        end: () => "+=" + (window.innerHeight * 3), // 3 slides, each taking up 100vh
        pin: true,
        scrub: true,
      }
    });
  
    // Fade-in effect for each .journey-item when it comes into view
    gsap.utils.toArray(".journey-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  });