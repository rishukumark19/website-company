document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navOverlay = document.querySelector(".nav-overlay");

  if (menuToggle && navOverlay) {
    menuToggle.addEventListener("click", () => {
      navOverlay.classList.toggle("active");

      // Optional: Change hamburger icon to X when active
      if (navOverlay.classList.contains("active")) {
        menuToggle.textContent = "✕";
      } else {
        menuToggle.textContent = "☰";
      }
    });
  }
});
