import { mainContainer } from "../index";

function renderContact() {
  let contactSection = document.createElement("main");
  contactSection.classList.add("mainSection");

  let contact = document.createElement("div");
  contact.classList.add("contact");

  contactSection.appendChild(contact);

  mainContainer.appendChild(contactSection);
}

export { renderContact };
