import { mainContainer } from "../index";

function renderContact() {
  let contactSection = document.createElement("main");
  contactSection.classList.add("mainSection");

  let contact = document.createElement("div");
  contact.classList.add("contact");

  let contactTitle = document.createElement("h1");
  contactTitle.classList.add("contactTitle");
  contactTitle.textContent = "Contact Us";

  let contactContainer = document.createElement("div");
  contactContainer.classList.add("contactContainer");

  let contactTextOne = document.createElement("p");
  contactTextOne.classList.add("contactText");
  contactTextOne.textContent = "Conveniently located on Ocean Avenue.";

  let contactTextTwo = document.createElement("p");
  contactTextTwo.classList.add("contactText");
  contactTextTwo.textContent = "Down the road from the Wonder Wharf.";

  let contactTextThree = document.createElement("p");
  contactTextThree.classList.add("contactText");
  contactTextThree.textContent = "Beside It's Your Funeral and Crematorium";

  let contactImg = document.createElement("img");
  contactImg.src = "../dist/images/Bob's_Burgers_promo.png";

  contactContainer.appendChild(contactTextOne);
  contactContainer.appendChild(contactTextTwo);
  contactContainer.appendChild(contactTextThree);
  contactContainer.appendChild(contactImg);

  contact.appendChild(contactTitle);
  contact.appendChild(contactContainer);

  contactSection.appendChild(contact);

  mainContainer.appendChild(contactSection);
}

export { renderContact };
