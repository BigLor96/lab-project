const menuLinks = document.querySelectorAll(".menu-btn");

function updateActiveLink() {
  const currentSection = window.location.hash || "#home";

  menuLinks.forEach((link) => {
    const isActive = link.getAttribute("href") === currentSection;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  });
}

window.addEventListener("hashchange", updateActiveLink);
updateActiveLink();
