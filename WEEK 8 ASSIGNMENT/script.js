// FAQ Toggle
document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach(q => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;

      // Close other answers
      document.querySelectorAll(".faq-answer").forEach(a => {
        if (a !== answer) a.style.display = "none";
      });

      // Toggle current
      answer.style.display = (answer.style.display === "block") ? "none" : "block";
    });
  });
});
// ========== Smooth Scroll ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ========== FAQ Accordion ==========
const faqButtons = document.querySelectorAll(".faq button");

faqButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;

    // Toggle answer visibility
    answer.classList.toggle("active");

    // Change button style when active
    btn.classList.toggle("open");
  });
});

// ========== Contact Form Validation ==========
const form = document.querySelector(".contact-form");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email || !message) {
      alert("⚠️ Please fill out all fields before sending.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("⚠️ Please enter a valid email address.");
      return;
    }

    alert("✅ Thank you, " + name + "! Your message has been sent.");
    form.reset();
  });
}
// Contact Form Validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const messageBox = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page refresh

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      messageBox.style.color = "red";
      messageBox.textContent = "⚠️ Please fill out all fields.";
      return;
    }

    // Simple email validation
    if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email)) {
      messageBox.style.color = "red";
      messageBox.textContent = "⚠️ Please enter a valid email address.";
      return;
    }

    // Success message
    messageBox.style.color = "green";
    messageBox.textContent = "✅ Thank you! Your message has been sent.";
    form.reset(); // clear inputs
  });
});
