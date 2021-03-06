import { mainContainer } from "../index";

function renderNav() {
  let navBar = document.createElement("nav");
  navBar.classList.add("navBar");

  let navContainer = document.createElement("div");
  navContainer.classList.add("navContainer");

  let home = document.createElement("h2");
  home.classList.add("navText", "homeBtn");
  home.textContent = "Home";

  let botd = document.createElement("h2");
  botd.classList.add("navText", "botdBtn");
  botd.textContent = "Burger of the Day";

  let menu = document.createElement("h2");
  menu.classList.add("navText", "menuBtn");
  menu.textContent = "Menu";

  let contact = document.createElement("h2");
  contact.classList.add("navText", "contactBtn");
  contact.textContent = "Contact";

  navContainer.appendChild(home);
  navContainer.appendChild(botd);
  navContainer.appendChild(menu);
  navContainer.appendChild(contact);

  navBar.appendChild(navContainer);

  mainContainer.appendChild(navBar);
}

export { renderNav };
