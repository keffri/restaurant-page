import { mainContainer } from "../index";

function renderMenu() {
  let menuSection = document.createElement("main");
  menuSection.classList.add("mainSection");

  let menu = document.createElement("div");
  menu.classList.add("menu");

  let menuTitle = document.createElement("h1");
  menuTitle.classList.add("menuTitle");
  menuTitle.textContent = "Menu";

  let menuContainer = document.createElement("div");
  menuContainer.classList.add("menuContainer");

  /*** MENU ITEMS ***/

  let menuItemOne = document.createElement("div");
  menuItemOne.classList.add("menuItem");
  let menuItemTwo = document.createElement("div");
  menuItemTwo.classList.add("menuItem");
  let menuItemThree = document.createElement("div");
  menuItemThree.classList.add("menuItem");
  let menuItemFour = document.createElement("div");
  menuItemFour.classList.add("menuItem");
  let menuItemFive = document.createElement("div");
  menuItemFive.classList.add("menuItem");
  let menuItemSix = document.createElement("div");
  menuItemSix.classList.add("menuItem");

  menu.appendChild(menuTitle);

  menuContainer.appendChild(menuItemOne);
  menuContainer.appendChild(menuItemTwo);
  menuContainer.appendChild(menuItemThree);
  menuContainer.appendChild(menuItemFour);
  menuContainer.appendChild(menuItemFive);
  menuContainer.appendChild(menuItemSix);
  menu.appendChild(menuContainer);

  menuSection.appendChild(menu);

  mainContainer.appendChild(menuSection);
}

export { renderMenu };
