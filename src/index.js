import { renderNav } from "./modules/navbar";
import { renderFooter } from "./modules/footer";
import { renderHome } from "./modules/home";
import { renderMenu } from "./modules/menu";
import { renderAbout } from "./modules/about";

const mainContainer = document.getElementById("mainContainer");

function init() {
  mainContainer.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
  createListeners();
}

function home() {
  mainContainer.innerHTML = "";
  renderNav();
  renderHome();
  renderFooter();
  createListeners();
}

function menu() {
  mainContainer.innerHTML = "";
  renderNav();
  renderMenu();
  renderFooter();
  createListeners();
}

function about() {
  mainContainer.innerHTML = "";
  renderNav();
  renderAbout();
  renderFooter();
  createListeners();
}

function createListeners() {
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn.addEventListener("click", home);

  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.addEventListener("click", menu);

  const aboutBtn = document.querySelector(".aboutBtn");
  aboutBtn.addEventListener("click", about);
}

init();

export { mainContainer };
