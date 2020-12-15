import { mainContainer } from "../index";

function renderNav() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");

  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Restuarant Page";

  navBar.appendChild(title);

  let navContainer = document.createElement("div");
  navContainer.classList.add("navContainer");

  let home = document.createElement("h2");
  home.classList.add("navText", "homeBtn");
  home.textContent = "Home";

  let menu = document.createElement("h2");
  menu.classList.add("navText", "menuBtn");
  menu.textContent = "Menu";

  let about = document.createElement("h2");
  about.classList.add("navText", "aboutBtn");
  about.textContent = "About";

  navContainer.appendChild(home);
  navContainer.appendChild(menu);
  navContainer.appendChild(about);

  navBar.appendChild(navContainer);

  mainContainer.appendChild(navBar);
}

export { renderNav };
