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

  let menuItems = document.createElement("div");
  menuItems.classList.add("menuDiv");
  let regular = document.createElement("p");
  regular.textContent = "REGULAR";
  menuItems.appendChild(regular);
  let special = document.createElement("p");
  special.textContent = "SPECIAL";
  menuItems.appendChild(special);
  let cheese = document.createElement("p");
  cheese.textContent = "CHEESE";
  menuItems.append(cheese);
  let fries = document.createElement("p");
  fries.textContent = "FRIES";
  menuItems.appendChild(fries);
  let sweetPotatoFries = document.createElement("p");
  sweetPotatoFries.classList.add("s");
  sweetPotatoFries.textContent = "Sweet Potato Fries";
  menuItems.appendChild(sweetPotatoFries);
  let sideSalad = document.createElement("p");
  sideSalad.textContent = "SIDE SALAD";
  menuItems.appendChild(sideSalad);
  let softDrink = document.createElement("p");
  softDrink.textContent = "SOFT DRINK";
  menuItems.appendChild(softDrink);
  let beer = document.createElement("p");
  beer.textContent = "BEER";
  menuItems.appendChild(beer);

  /*** MENU PRICES ***/

  let menuPrices = document.createElement("div");
  menuPrices.classList.add("menuDiv");
  let regularPrice = document.createElement("p");
  regularPrice.textContent = "$5.00";
  menuPrices.appendChild(regularPrice);
  let specialPrice = document.createElement("p");
  specialPrice.textContent = "$5.95";
  menuPrices.appendChild(specialPrice);
  let cheesePrice = document.createElement("p");
  cheesePrice.textContent = "ADD.50";
  menuPrices.appendChild(cheesePrice);
  let friesPrice = document.createElement("p");
  friesPrice.textContent = "$2.00";
  menuPrices.appendChild(friesPrice);
  let sweetPotatoFriesPrice = document.createElement("p");
  sweetPotatoFriesPrice.textContent = "$3.00";
  menuPrices.appendChild(sweetPotatoFriesPrice);
  let sideSaladPrice = document.createElement("p");
  sideSaladPrice.textContent = "$2.50";
  menuPrices.appendChild(sideSaladPrice);
  let softDrinkPrice = document.createElement("p");
  softDrinkPrice.textContent = "$2.00";
  menuPrices.appendChild(softDrinkPrice);
  let beerPrice = document.createElement("p");
  beerPrice.textContent = "$4.00";
  menuPrices.appendChild(beerPrice);

  menuContainer.appendChild(menuItems);
  menuContainer.appendChild(menuPrices);

  menu.appendChild(menuTitle);

  menu.appendChild(menuContainer);

  menuSection.appendChild(menu);

  mainContainer.appendChild(menuSection);
}

export { renderMenu };
