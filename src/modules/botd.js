import { mainContainer } from "../index";

function renderBOTD() {
  let botdSection = document.createElement("main");
  botdSection.classList.add("mainSection");

  let botd = document.createElement("div");
  botd.classList.add("botd");

  let botdTitle = document.createElement("h1");
  botdTitle.classList.add("botdTitle");
  botdTitle.textContent = "BOTD";

  let botdContainer = document.createElement("div");
  botdContainer.classList.add("botdContainer");

  let botdTitleContainer = document.createElement("div");
  botdTitleContainer.classList.add("botdTextContainer");
  let botdMenuTitle = document.createElement("p");
  botdMenuTitle.classList.add("botdMenuTitle");
  botdMenuTitle.textContent = "BURGER";
  let botdTitleSub = document.createElement("p");
  botdTitleSub.classList.add("botdTitleSub");
  botdTitleSub.textContent = "OF THE DAY";
  botdTitleContainer.appendChild(botdMenuTitle);
  botdTitleContainer.appendChild(botdTitleSub);

  let burgerTitleContainer = document.createElement("div");
  burgerTitleContainer.classList.add("botdTextContainer");
  let burgerTitle = document.createElement("p");
  burgerTitle.classList.add("burgerTitle");
  burgerTitle.textContent = `"Take A Byte Out Of This" Burger`;
  burgerTitleContainer.appendChild(burgerTitle);

  let burgerPriceContainer = document.createElement("div");
  burgerPriceContainer.classList.add("botdTextContainer");
  let burgerPrice = document.createElement("p");
  burgerPrice.classList.add("burgerPrice");
  burgerPrice.textContent = "$5.95";
  burgerPriceContainer.appendChild(burgerPrice);

  botdContainer.appendChild(botdTitleContainer);
  botdContainer.appendChild(burgerTitleContainer);
  botdContainer.appendChild(burgerPriceContainer);
  botd.appendChild(botdTitle);
  botd.appendChild(botdContainer);

  botdSection.appendChild(botd);

  mainContainer.appendChild(botdSection);
}

export { renderBOTD };
