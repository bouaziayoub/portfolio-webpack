import "./styles.css";

import {
  renderContact,
  renderHome,
  renderNavbar,
  renderStudies,
  renderExperience,
  renderProjects,
} from "./views/export";

const routes = {
  "/": renderHome,
  "/contact": renderContact,
  "/studies": renderStudies,
  "/projects": renderProjects,
  "/experience": renderExperience,
};

function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderRoute();
}

function renderRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  const root = document.querySelector(".root");
  if (route) {
    root.innerHTML = ""; // Limpiar el contenido del div root
    renderNavbar();
    route();
  } else {
    root.innerHTML = ""; // Limpiar el contenido del div root
    renderNavbar();
    routes["/"](); // Ruta por defecto
  }
}

window.onpopstate = renderRoute;

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      event.preventDefault();
      navigateTo(event.target.getAttribute("href"));
    }
  });
  renderRoute();
});
