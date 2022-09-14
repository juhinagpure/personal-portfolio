const videos = document.querySelectorAll(".video");
let themeColor = document.querySelectorAll('.theme-toggler span');

themeColor.forEach(color => color.addEventListener('click', () =>{
    let background = color.style.background;
    document.querySelector('body').style.background = background;
}));


videos.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
    video.playbackRate = 2.0;
  });
  video.addEventListener("mouseout", () => {
    video.pause();
  });
});


var type = new Typed('.typing-text',{
    strings : [ 'web designer', 'front end developer', 'Artist', 'Guider' ],
    typeSpeed: 120,
    loop:true
});
