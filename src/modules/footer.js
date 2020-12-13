import { mainContainer } from "../index";

function renderFooter() {
  let footer = document.createElement("footer");
  footer.classList.add("footer");

  let gitHubIcon = document.createElement("i");
  gitHubIcon.classList.add("fab");
  gitHubIcon.classList.add("fa-github-square");

  footer.appendChild(gitHubIcon);

  mainContainer.appendChild(footer);
}

export { renderFooter };
