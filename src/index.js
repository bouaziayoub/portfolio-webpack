import "./styles.css";
import {
  renderContact,
  renderNotes,
  renderProjects,
  renderAcerca,
} from "./views/exportViews";

import { renderNavbar, renderFooter } from "./components/exportComponents";

const routes = {
  "/": renderProjects,
  "/arceca": renderAcerca,
  "/contact": renderContact,
  "/notes": renderNotes,
};

function navigateTo(path) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    window.open(path, '_blank');
    return;
  } else {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    const url = window.location.origin + path;
    window.history.pushState({}, path, url);
    renderRoute();
  }
}

function renderRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  const root = document.querySelector(".root");
  if (route) {
    root.innerHTML = ""; // Limpiar el contenido del div root
    renderNavbar();
    route();
    renderFooter(); // Renderizar el pie de página
    updateActiveNavLink(path);
  } else {
    root.innerHTML = ""; // Limpiar el contenido del div root
    renderNavbar();
    routes["/"](); // Ruta por defecto
    renderFooter(); // Renderizar el footer de página
    updateActiveNavLink("/");
  }
}

function updateActiveNavLink(path) {
  const navLinks = document.querySelectorAll("#navbar a");
  navLinks.forEach(link => {
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

window.onpopstate = renderRoute;

document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (event) => {
    if (event.target.matches("a") && !event.target.target) {
      event.preventDefault();
      navigateTo(event.target.getAttribute("href"));
    }
  });
  renderRoute();
});
