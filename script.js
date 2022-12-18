const videos = document.querySelectorAll(".video");
let themeColor = document.querySelectorAll(".theme-toggler span");
const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const header = document.querySelector(".header");
const text = document.querySelector(".typing-text");

themeColor.forEach((color) =>
  color.addEventListener("click", () => {
    let background = color.style.background;
    document.querySelector("body").style.background = background;
    header.style.background = background;
    menuOpen.style.background = background;
    menuClose.style.background = background;
  })
);

videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
    video.playbackRate = 2.0;
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});

const textLoad = () => {
  setTimeout(() => {
    text.textContent = "Frontend Developer";
  }, 0);
  setTimeout(() => {
    text.textContent = "web designer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Artist";
  }, 8000);
  setTimeout(() => {
    text.textContent = "Guider";
  }, 12000);
};

textLoad();

var typed = new Typed(".typing-text", {
  strings: ["web designer", "frontend developer", "Artist", "Guider"],
  typeSpeed: 120,
  loop: true,
});

menuOpen.addEventListener("click", () => {
  console.log("clicked");
  header.classList.add("display");
});

menuClose.addEventListener("click", () => {
  header.classList.remove("display");
});