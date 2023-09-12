document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const asideBar = document.querySelector("aside");
  const closeAsideBar = document.querySelector(".close-aside");
  const myAudio = document.getElementById("my-audio");
  const trackList = document.querySelector(".track-list");

  let currentlyPlayingElement = null;

  trackList.addEventListener("click", function (event) {
    var target = event.target;
    if (target.tagName === "I" && target.classList.contains("bi-play")) {
      var src = target.getAttribute("data-src");

      if (currentlyPlayingElement && currentlyPlayingElement !== target) {
        currentlyPlayingElement.classList.remove("bi-pause");
        currentlyPlayingElement.classList.add("bi-play");
      }

      myAudio.src = src;
      myAudio.play();
      target.classList.remove("bi-play");
      target.classList.add("bi-pause");

      currentlyPlayingElement = target;
    } else if (
      target.tagName === "I" &&
      target.classList.contains("bi-pause")
    ) {
      myAudio.pause();
      target.classList.remove("bi-pause");
      target.classList.add("bi-play");
      currentlyPlayingElement = null;
    }
  });

  hamburgerMenu.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });

  closeAsideBar.addEventListener("click", () => {
    asideBar.classList.toggle("display-side-bar");
  });
});
