// First include GSAP in your head (if not already)
document.addEventListener('DOMContentLoaded', function () {
  // Initialize GSAP
  gsap.registerPlugin(ScrollTrigger);

  const textTrack = document.querySelector('.scrolling-text-track');
  const textContent = document.querySelector('.scrolling-text-content');

  // Calculate total width needed
  const textWidth = textContent.scrollWidth;
  const duration = textWidth / 100; // Adjust speed

  // Create the animation timeline
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".scrolling-text-section",
      start: "top bottom",
      end: "bottom top",
      scrub: 1, // Smooth scrubbing effect
      markers: false // Set to true for debugging
    }
  });
  // navbar scrolled bg
 window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  // Animate from right to left
  tl.fromTo(textContent,
    { x: 0 },
    { x: -textWidth / 2, duration: duration, ease: "none" }
  );

  // Make it responsive
  window.addEventListener('resize', function () {
    ScrollTrigger.refresh();
  });
});


window.addEventListener("scroll", function () {
  const arrow = document.getElementById("backToTopArrow");
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollY > windowHeight * 1) {
    arrow.classList.remove("d-none");
  } else {
    arrow.classList.add("d-none");
  }
});

// const scroll = new LocomotiveScroll({
//   el: document.querySelector("[data-scroll-container]"),
//   smooth: true
// });
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.animate-fade-in-right').forEach((el) => {
    observer.observe(el);
  });