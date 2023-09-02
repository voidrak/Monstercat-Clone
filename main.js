document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const asideBar = document.querySelector("aside");
  const closeAsideBar = document.querySelector(".close-aside");

  hamburgerMenu.addEventListener("click", () => {
    console.log("clicked");
    asideBar.style.display = "block";
  });

  closeAsideBar.addEventListener("click", () => {
    console.log("clicked");
    asideBar.style.display = "none";
  });

  //   hamburgerMenu.style.backgroundColor = "red";
});
