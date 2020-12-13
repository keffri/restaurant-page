import { renderNav } from "./modules/navbar";
import { renderFooter } from "./modules/footer";
import { renderHome } from "./modules/home";

const mainContainer = document.getElementById("mainContainer");

function home() {
  renderNav();
  renderHome();
  renderFooter();
}

home();

export { mainContainer };
