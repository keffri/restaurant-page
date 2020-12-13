import { mainContainer } from "../index";

function renderNav() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");

  let home = document.createElement("h1");
  home.classList.add("navText");
  home.textContent = "Home";

  let menu = document.createElement("h1");
  menu.classList.add("navText");
  menu.textContent = "Menu";

  let about = document.createElement("h1");
  about.classList.add("navText");
  about.textContent = "About";

  navBar.appendChild(home);
  navBar.appendChild(menu);
  navBar.appendChild(about);

  mainContainer.appendChild(navBar);
}

export { renderNav };
