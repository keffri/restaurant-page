import { mainContainer } from "../index";

function renderContact() {
  let contactSection = document.createElement("main");
  contactSection.classList.add("mainSection");

  let contact = document.createElement("div");
  contact.classList.add("contact");

  let contactTitle = document.createElement("h1");
  contactTitle.classList.add("contactTitle");
  contactTitle.textContent = "Contact Us";

  contact.appendChild(contactTitle);

  contactSection.appendChild(contact);

  mainContainer.appendChild(contactSection);
}

export { renderContact };
