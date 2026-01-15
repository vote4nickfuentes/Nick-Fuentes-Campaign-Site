const heroImages = [
  "assets/img/hero1.jpg",
  "assets/img/hero2.jpg",
  "assets/img/hero3.jpg",
  "assets/img/hero4.jpg",
  "assets/img/hero5.jpg",
  "assets/img/hero6.jpg",
  "assets/img/hero7.jpg",
  "assets/img/hero8.jpg"
];

let currentHero = 0;
const heroSection = document.getElementById("hero");

// Set initial image
heroSection.style.backgroundImage = `url('${heroImages[0]}')`;

setInterval(() => {
  currentHero = (currentHero + 1) % heroImages.length;
  heroSection.style.backgroundImage = `url('${heroImages[currentHero]}')`;
}, 5000);
