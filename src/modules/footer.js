import { mainContainer } from "../index";

function renderFooter() {
  let footer = document.createElement("footer");
  footer.classList.add("footer");

  let footerLink = document.createElement("a");
  footerLink.href = "https://www.github.com/keffri";
  footerLink.setAttribute("target", "_blank");
  let gitHubIcon = document.createElement("i");
  gitHubIcon.classList.add("fab");
  gitHubIcon.classList.add("fa-github");
  footerLink.appendChild(gitHubIcon);

  footer.appendChild(footerLink);

  mainContainer.appendChild(footer);
}

export { renderFooter };
