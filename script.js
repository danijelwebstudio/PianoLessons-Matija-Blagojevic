// Background slideshow
const images = document.querySelectorAll(".bg-image");
let currentIndex = 0;

function changeBackground() {
  images.forEach((img, index) => {
    img.classList.toggle("active", index === currentIndex);
  });
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000);

// Scroll reveal animations
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animacija jednom
      }
    });
  },
  { threshold: 0.2 } // aktivira se kad je 20% elementa u view
);

reveals.forEach((el) => {
  observer.observe(el);
});
