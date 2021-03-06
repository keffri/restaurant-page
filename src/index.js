import { renderNav } from "./modules/navbar";
import { renderFooter } from "./modules/footer";
import { renderHome } from "./modules/home";
import { renderMenu } from "./modules/menu";
import { renderBOTD } from "./modules/botd";
import { renderContact } from "./modules/contact";

const mainContainer = document.getElementById("mainContainer");

function init() {
  mainContainer.innerHTML = "";
  renderNav();
  renderHome();
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

function botd() {
  mainContainer.innerHTML = "";
  renderNav();
  renderBOTD();
  renderFooter();
  createListeners();
}

function contact() {
  mainContainer.innerHTML = "";
  renderNav();
  renderContact();
  renderFooter();
  createListeners();
}

function createListeners() {
  const homeBtn = document.querySelector(".homeBtn");
  homeBtn.addEventListener("click", home);

  const botdBtn = document.querySelector(".botdBtn");
  botdBtn.addEventListener("click", botd);

  const menuBtn = document.querySelector(".menuBtn");
  menuBtn.addEventListener("click", menu);

  const contactBtn = document.querySelector(".contactBtn");
  contactBtn.addEventListener("click", contact);
}

init();

export { mainContainer };
