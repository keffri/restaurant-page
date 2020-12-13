import { mainContainer } from "../index";

function renderHome() {
  let homeSection = document.createElement("main");
  homeSection.classList.add("mainSection");

  let home = document.createElement("div");
  home.classList.add("home");

  let homeTitle = document.createElement("h3");
  homeTitle.classList.add("homeTitle");
  homeTitle.textContent = "Restaurant Page";

  let homeText = document.createElement("p");
  homeText.classList.add("homeText");
  homeText.textContent =
    " Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

  home.appendChild(homeTitle);
  home.appendChild(homeText);
  homeSection.appendChild(home);

  mainContainer.appendChild(homeSection);
}

export { renderHome };
