// FAQ accordion interaction (improved)
document.querySelectorAll('.enhanced-faq .faq-question').forEach(btn => {
  btn.addEventListener('click', function() {
    const item = this.parentElement;
    const answer = item.querySelector('.faq-answer');
    const icon = this.querySelector('.faq-icon');
    const isOpen = item.classList.contains('open');
    // Close all
    document.querySelectorAll('.enhanced-faq .faq-item').forEach(i => {
      i.classList.remove('open');
      i.querySelector('.faq-answer').style.display = 'none';
      i.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
    });
    // Open if not already open
    if (!isOpen) {
      item.classList.add('open');
      answer.style.display = 'block';
      icon.style.transform = 'rotate(180deg)';
    }
  });
});
// Hero background slider
const heroImages = [
  'images/banner.jng.jpg',
  'images/oil2.png.jpg',
  'images/oil3.png.jpg',
  'images/oil4.jng.jpg',
  'images/welcome.jng.jpg'
];
let heroIndex = 0;
const heroBg = document.querySelector('.hero-slider-bg');
if (heroBg) {
  setInterval(() => {
    heroIndex = (heroIndex + 1) % heroImages.length;
    heroBg.style.backgroundImage = `url('${heroImages[heroIndex]}')`;
  }, 3500);
}
// =====================
// Navbar Hamburger Menu
// =====================
const hamburger = document.querySelector(".hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// =====================
// FAQ Accordion Toggle
// =====================
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const parent = question.parentElement;
    parent.classList.toggle("active");

    const answer = parent.querySelector(".faq-answer");
    if (answer.style.display === "block") {
      answer.style.display = "none";
    } else {
      answer.style.display = "block";
    }
  });
});

// =====================
// Contact Form Feedback
// =====================
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "✅ Thank you! Your message has been sent.";
    formMessage.style.color = "green";
    contactForm.reset();
  });
}
