import { mainContainer } from "../index";

function renderAbout() {
  let aboutSection = document.createElement("main");
  aboutSection.classList.add("mainSection");

  let about = document.createElement("div");
  about.classList.add("about");

  aboutSection.appendChild(about);

  mainContainer.appendChild(aboutSection);
}

export { renderAbout };
