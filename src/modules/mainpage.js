function createMain() {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  let content = document.createElement("div");
  content.classList.add("content");

  let header = document.createElement("header");
  header.classList.add("header");
  let title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = `Restuarant Page`;

  let main = document.createElement("main");
  main.classList.add("body");
  let foodImg = document.createElement("img");
  foodImg.src = "./images/IMG_6594small.jpg";

  let foodText = document.createElement("p");
  foodText.textContent = `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
  molestias quasi doloremque ad, amet ipsa sed harum quis delectus
  cumque odio tempora non vero porro ullam quos perferendis! Maiores
  quae voluptas, eos voluptate dignissimos nisi molestias illo
  reprehenderit consequuntur fugiat eligendi, necessitatibus enim
  molestiae laudantium distinctio corrupti accusantium eum.
  Architecto?`;
  foodText.classList.add("foodText");

  document.body.appendChild(mainContainer);
  mainContainer.appendChild(content);
  content.appendChild(header);
  header.appendChild(title);
  content.appendChild(main);
  main.appendChild(foodImg);
  main.appendChild(foodText);

  console.log("poop");
}

export default createMain;
