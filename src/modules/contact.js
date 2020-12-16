import { mainContainer } from "../index";

function renderContact() {
  let contactSection = document.createElement("main");
  contactSection.classList.add("mainSection");

  let contact = document.createElement("div");
  contact.classList.add("contact");

  let contactTitle = document.createElement("h1");
  contactTitle.classList.add("contactTitle");
  contactTitle.textContent = "Contact Us";

  let formContainer = document.createElement("div");
  formContainer.classList.add("formContainer");

  let form = document.createElement("form");
  form.classList.add("form");

  let location = document.createElement("p");
  location.classList.add("location");
  location.textContent = "Conveniently located on Ocean Avenue.";

  form.appendChild(location);
  formContainer.appendChild(form);

  contact.appendChild(contactTitle);
  contact.appendChild(formContainer);

  contactSection.appendChild(contact);

  mainContainer.appendChild(contactSection);
}

export { renderContact };
