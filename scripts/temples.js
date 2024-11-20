document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("mainNav");
  
    hamburger.addEventListener("click", () => {
      const isVisible = nav.style.display === "block";
      nav.style.display = isVisible ? "none" : "block";
      hamburger.innerHTML = isVisible ? "&#9776;" : "X";
    });
  });
  