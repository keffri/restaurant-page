function createMain() {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  let content = document.createElement("div");
  content.classList.add("content");

  let header = document.createElement("header");
  header.classList.add("header");
  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Restuarant Page";

  let main = document.createElement("main");
  main.classList.add("body");
  let foodImg = document.createElement("img");
  foodImg.src = "./images/IMG_6594small.jpg";

  let foodText = document.createElement("p");
  foodText.classList.add("foodText");

  mainContainer.appendChild(content);
  content.appendChild(header);
  header.appendChild(title);
  content.appendChild(main);
  main.appendChild(foodImg);
  main.appendChild(foodText);

  console.log("poop");
}

export default createMain;
