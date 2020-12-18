import { mainContainer } from "../index";

function renderHome() {
  let homeSection = document.createElement("main");
  homeSection.classList.add("mainSection");

  let home = document.createElement("div");
  home.classList.add("home");

  let homeTitle = document.createElement("h3");
  homeTitle.classList.add("homeTitle");
  homeTitle.textContent = "Bob's Burgers";

  let homeImg = document.createElement("img");
  homeImg.classList.add("homeImg");
  homeImg.src =
    "https://www.pluggedin.com/wp-content/uploads/2020/01/bobs-burgers-review-image-1024x587.jpg";

  home.appendChild(homeTitle);

  home.appendChild(homeImg);
  homeSection.appendChild(home);

  mainContainer.appendChild(homeSection);
}

export { renderHome };
