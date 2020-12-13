import { renderNav } from "./modules/navbar";
import { renderFooter } from "./modules/footer";

const mainContainer = document.getElementById("mainContainer");

function home() {
  renderNav();
  renderFooter();
}

home();

export { mainContainer };
