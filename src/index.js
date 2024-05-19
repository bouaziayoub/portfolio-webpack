import "./styles.css";
import {
  renderContact,
  renderNavbar,
  renderStudies,
  renderExperience,
  renderProjects,
} from "./views/export";

const routes = {
  "/": renderProjects,
  "/contact": renderContact,
  "/studies": renderStudies,
  "/experience": renderExperience,
};

function navigateTo(path) {
  let url;
  if (path.startsWith("http://") || path.startsWith("https://")) {
    // Si es una URL externa, abrir en una nueva pestaña
    window.open(path, '_blank');
    return;
  } else {
    if (!path.startsWith("/")) {
      path = "/" + path;
    }
    url = window.location.origin + path;
  }
  window.history.pushState({}, path, url);
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
    updateActiveNavLink(path);
  } else {
    root.innerHTML = ""; // Limpiar el contenido del div root
    renderNavbar();
    routes["/"](); // Ruta por defecto
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
    if (event.target.matches("a")) {
      event.preventDefault();
      navigateTo(event.target.getAttribute("href"));
    }
  });
  renderRoute();
});
