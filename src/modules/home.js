import { mainContainer } from "../index";

function renderHome() {
  let homeSection = document.createElement("main");
  homeSection.classList.add("mainSection");

  let home = document.createElement("div");
  home.classList.add("home");

  let homeTitle = document.createElement("h3");
  homeTitle.classList.add("homeTitle");
  homeTitle.textContent = "Bob's Burgers";

  // let homeText = document.createElement("p");
  // homeText.classList.add("homeText");
  // homeText.textContent =
  //   " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  let homeImg = document.createElement("img");
  homeImg.classList.add("homeImg");
  homeImg.src =
    "../dist/images/BobsBurgers_1005_BobBelcherAndTheTerribleHorrible..._A05_Promo_08.jpg";

  home.appendChild(homeTitle);
  // home.appendChild(homeText);
  home.appendChild(homeImg);
  homeSection.appendChild(home);

  mainContainer.appendChild(homeSection);
}

export { renderHome };
