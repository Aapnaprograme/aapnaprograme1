/* ===== Smooth Scroll for Navbar ===== */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });
  });
});

/* ===== Typing Animation (Home Name) ===== */
const text = "Hello, I'm Ankush 👋";
let index = 0;
const speed = 100;

function typingEffect() {
  if (index < text.length) {
    document.querySelector("#home h1").textContent += text.charAt(index);
    index++;
    setTimeout(typingEffect, speed);
  }
}

document.querySelector("#home h1").textContent = "";
typingEffect();

/* ===== Scroll Reveal Animation ===== */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.2;

    if (sectionTop < screenHeight) {
      section.classList.add("show");
    }
  });
});

/* ===== Contact Form Fake Submit (for now) ===== */
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent 😊");
  form.reset();
});
document.addEventListener("DOMContentLoaded", () => {
  const skillSection = document.querySelector("#skills");
  const skillBars = document.querySelectorAll(".skill-bar span");

  // Pehle width 0 rakho
  skillBars.forEach(bar => {
    bar.style.width = "0%";
  });

  function showSkills() {
    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
      skillBars.forEach(bar => {
        const targetWidth = bar.className;
        bar.style.width = getWidth(targetWidth);
      });

      window.removeEventListener("scroll", showSkills);
    }
  }

  function getWidth(skill) {
    switch (skill) {
      case "html": return "80%";
      case "css": return "70%";
      case "js": return "60%";
      case "python": return "50%";
      case "cpp": return "55%";
      case "csharp": return "45%";
      case "ml": return "40%";
      case "git": return "60%";
      default: return "50%";
    }
  }

  window.addEventListener("scroll", showSkills);
});
function toggleProject(card) {
  card.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const messages = [
    "Hello 👋 I'm Aura",
    "Professional Web Developer 💻",
    "Python & C++ Learner 🧠",
    "ML Beginner 🤖"
  ];

  let i = 0;
  let j = 0;
  const speed = 80;
  const delay = 1200;

  const textEl = document.getElementById("chat-text");

  function type() {
    if (!textEl) return;

    if (j < messages[i].length) {
      textEl.textContent += messages[i][j];
      j++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        textEl.textContent = "";
        j = 0;
        i = (i + 1) % messages.length;
        type();
      }, delay);
    }
  }

  type();
});



