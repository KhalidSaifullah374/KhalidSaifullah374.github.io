document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".site-header nav");

  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("open");

      const isOpen = nav.classList.contains("open");
      menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }
});
