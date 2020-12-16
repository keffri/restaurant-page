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

  let menuItemTitle = document.createElement("p");
  menuItemTitle.classList.add("menuItemTitle");
  menuItemTitle.textContent = "BURGER";
  let menuItemTitleSub = document.createElement("p");
  menuItemTitleSub.classList.add("menuItemTitleSub");
  menuItemTitleSub.textContent = "OF THE DAY";

  let menuItemTwo = document.createElement("div");
  menuItemTwo.classList.add("menuItem");
  let menuItemTwoText = document.createElement("p");
  menuItemTwoText.classList.add("menuItemText");
  menuItemTwoText.textContent = `"Byte Me" Burger`;

  let menuItemThree = document.createElement("div");
  menuItemThree.classList.add("menuItem", "fries");
  let menuItemThreeTextOne = document.createElement("p");
  menuItemThreeTextOne.classList.add("menuItemText");
  menuItemThreeTextOne.textContent = "Fries";
  let menuItemThreeTextTwo = document.createElement("p");
  menuItemThreeTextTwo.classList.add("menuItemText", "s");
  menuItemThreeTextTwo.textContent = "Sweet Potato Fries";

  let menuItemFour = document.createElement("div");
  menuItemFour.classList.add("menuItem");
  let menuItemFourText = document.createElement("p");
  menuItemFourText.classList.add("menuItemText");
  menuItemFourText.textContent = "$5.95";

  menu.appendChild(menuTitle);

  menuItemOne.appendChild(menuItemTitle);
  menuItemOne.appendChild(menuItemTitleSub);

  menuItemTwo.appendChild(menuItemTwoText);

  menuItemThree.appendChild(menuItemThreeTextOne);
  menuItemThree.appendChild(menuItemThreeTextTwo);

  menuItemFour.appendChild(menuItemFourText);

  menuContainer.appendChild(menuItemOne);
  menuContainer.appendChild(menuItemTwo);
  menuContainer.appendChild(menuItemThree);
  menuContainer.appendChild(menuItemFour);

  menu.appendChild(menuContainer);

  menuSection.appendChild(menu);

  mainContainer.appendChild(menuSection);
}

export { renderMenu };
