// Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let message = document.getElementById("message").value.trim();

      if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
      }

      if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Thank you for contacting Gracey Oil Perfume!");
      form.reset();
    });
  }
});
// FAQ Toggle
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach(q => {
    q.addEventListener("click", () => {
      q.classList.toggle("active");
      const answer = q.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  });
});
