// ===========================
// Minnie's Puppy House - script.js
// Interactive Effects
// ===========================

document.addEventListener("DOMContentLoaded", () => {
  console.log("Minnie's Puppy House JS loaded! 🐾");

  // ===== Smooth Scroll for Navigation =====
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      if (link.hash !== "") {
        e.preventDefault();
        const target = document.querySelector(link.hash);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // ===== Card Hover Pop =====
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) rotate(2deg)";
      card.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) rotate(0deg)";
      card.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
    });
  });

  // ===== Contact Form Alert =====
  const contactForm = document.querySelector("form");
  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      alert("🐶 Thanks for contacting Minnie's Puppy House! We'll get back to you soon!");
      contactForm.reset();
    });
  }

  // ===== Floating Paws Randomly =====
  function createPaw() {
    const paw = document.createElement("div");
    paw.classList.add("floating-paw");
    paw.style.top = Math.random() * window.innerHeight + "px";
    paw.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(paw);
    setTimeout(() => document.body.removeChild(paw), 5000);
  }
  setInterval(() => createPaw(), 2000);

  // ===== Optional Puppy Popup on Click =====
  function showPuppyPopup() {
    const puppy = document.createElement("div");
    puppy.classList.add("puppy-popup");
    document.body.appendChild(puppy);
    setTimeout(() => document.body.removeChild(puppy), 5000);
  }

  // Trigger puppy popup when any card is clicked
  cards.forEach(card => {
    card.addEventListener("click", () => showPuppyPopup());
  });
});
