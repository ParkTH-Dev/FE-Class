const playBtn = document.querySelector(".play-pause");
const video = document.querySelector("video");
const volumeBar = document.querySelector("input[type='range']");
const progressCover = document.querySelector(".progress");
const player = document.querySelector(".player");
const rateBtns = document.querySelectorAll(".rate");
const fullScreenBtn = document.querySelector("#fullscreenBtn");

const play = () => {
  playBtn.innerText = "||";
  video.play();
};
const pause = () => {
  playBtn.innerText = "▶︎";
  video.pause();
};
const togglePlay = () => {
  video.paused ? play() : pause();
};

const setVolume = (e) => {
  video.volume = e.target.value;
};

const formatting = (time) => {
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  let hour = Math.floor(time / 3600);

  sec = sec < 10 ? `0${sec}` : sec;
  min = min < 10 ? `0${min}` : min;
  hour = hour < 10 ? `0${hour}` : hour;

  return `${hour}:${min}:${sec}`;
};

const updateTime = () => {
  const current = document.querySelector(".current");
  const duration = document.querySelector(".duration");
  current.innerText = formatting(video.currentTime);
  duration.innerText = formatting(video.duration);
};

const updateprogress = () => {
  const progressBar = document.querySelector(".bar");
  const progressPointer = document.querySelector(".circle");
  const duration = video.duration;
  const currentTime = video.currentTime;
  const percent = (currentTime / duration) * 100;
  progressBar.style.width = `${percent}%`;
  const progressBarWidth = progressCover.clientWidth;
  const newPosition = (currentTime / duration) * progressBarWidth - 1;
  progressPointer.style.left = `${newPosition}px`;
};

const videoPoint = (e) => {
  const mouseX = e.pageX - player.offsetLeft;
  const progressBarWidth = progressCover.clientWidth;
  const duration = video.duration;
  const clickedTime = (mouseX / progressBarWidth) * duration;
  video.currentTime = clickedTime;
};

const setRate = (e) => {
  const { rate } = e.target.dataset;
  video.playbackRate = rate;
};

playBtn.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("timeupdate", updateTime);
video.addEventListener("timeupdate", updateprogress);
volumeBar.addEventListener("change", setVolume);
progressCover.addEventListener("click", (e) => {
  videoPoint(e);
});
rateBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    setRate(e);
  });
});

// fullScreen
fullScreenBtn.addEventListener("click", () => {
  video.requestFullscreen();
});
