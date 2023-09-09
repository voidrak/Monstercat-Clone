document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const asideBar = document.querySelector("aside");
  const closeAsideBar = document.querySelector(".close-aside");
  const trackList = document.querySelector(".track-list");
  const myAudio = document.getElementById("my-audio");

  trackList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "I") {
      let src = target.getAttributaudio1e("data-src");
      if (myAudio.paused) {
        myAudio.src = src;
        myAudio.play();
        target.classList.remove("bi-play");
        target.classList.add("bi-pause");
      } else {
        myAudio.pause();
        target.classList.remove("bi-pause");
        target.classList.add("bi-play");
      }
    }
  });

  hamburgerMenu.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });

  hamburgerMenu.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });

  closeAsideBar.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });
});
