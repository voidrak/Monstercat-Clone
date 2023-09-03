document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const asideBar = document.querySelector("aside");
  const closeAsideBar = document.querySelector(".close-aside");

  hamburgerMenu.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });

  closeAsideBar.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });
});
