const menuHome = document.querySelector("#menuHome");
const menuGame = document.querySelector("#menuGame");
const menuJukebox = document.querySelector("#menuJukebox");
const contentFrame = document.querySelector("#contentframe");

const homeChange = () => {
  contentFrame.setAttribute("src", "./home.html");
  menuHome.style = "background: #fff; color: #55b2e4";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const gmaeChange = () => {
  contentFrame.setAttribute("src", "./game.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #fff; color: #55b2e4";
  menuJukebox.style = "background: #55b2e4; color: #fff";
};
const jukeboxChange = () => {
  contentFrame.setAttribute("src", "./jukebox.html");
  menuHome.style = "background: #55b2e4; color: #fff";
  menuGame.style = "background: #55b2e4; color: #fff";
  menuJukebox.style = "background: #fff; color: #55b2e4";
};

menuHome.addEventListener("click", homeChange);
menuGame.addEventListener("click", gmaeChange);
menuJukebox.addEventListener("click", jukeboxChange);
