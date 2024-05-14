import "./styles.css";
import { renderHome } from "./views/home/home";
import { renderNavbar } from "./views/navbar/navbar";
import { renderContact } from "./views/contact/contact";

const routes = {
  '/': renderHome,
  '/contact': renderContact,
};

function navigateTo(path) {
  window.history.pushState({}, path, window.location.origin + path);
  renderRoute();
}

function renderRoute() {
  const path = window.location.pathname;
  const route = routes[path];
  const root = document.querySelector('.root');
  if (route) {
    root.innerHTML = ''; // Limpiar el contenido del div root
    renderNavbar();
    route();
  } else {
    root.innerHTML = ''; // Limpiar el contenido del div root
    renderNavbar();
    routes['/'](); // Ruta por defecto
  }
}

window.onpopstate = renderRoute;

document.addEventListener('DOMContentLoaded', () => {
  document.body.addEventListener('click', (event) => {
    if (event.target.matches('a')) {
      event.preventDefault();
      navigateTo(event.target.getAttribute('href'));
    }
  });
  renderRoute();
});
