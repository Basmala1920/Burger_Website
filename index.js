document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navList = document.querySelector(".nav-list");

  hamburger.addEventListener("click", () => {
    navList.classList.toggle("active");
  });

  const menuButton = document.querySelector(".menu-button");
  const menuSection = document.getElementById("menu-section");

  menuButton.addEventListener("click", function () {
    menuSection.scrollIntoView({ behavior: "smooth" });
  });

  const loadButton = document.querySelector(".load-button");
  const hiddenReviews = document.querySelectorAll(".reviewa");

  loadButton.addEventListener("click", () => {
    hiddenReviews.forEach((review) => {
      review.style.display = "inline-block";
    });

    loadButton.style.display = "none";
  });
});
