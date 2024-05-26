// navbar.js
import "./navbar.css";
import $ from "jquery"; // Importa jQuery
import {
  toggleDarkMode,
  loadDarkModePreference,
  saveDarkModePreference,
} from "../../utils/darkMode";
import light from "../../assets/img/dark-light-mode/light.png";
import dark from "../../assets/img/dark-light-mode/dark.png";

const renderNavbar = () => {
  const root = document.querySelector(".root");
  root.innerHTML += `
    <nav id="navbar">
      <ul>
        <li><a href="/">Proyectos <span class="slash"> / </span></a></li>
        <li><a href="/arceca">Acerca de mí</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><button id="dark-mode-toggle">
          <img src="${dark}" alt="dark-light-mode" />
        </button></li>
      </ul>
    </nav>
  `;

  // Función para manejar el clic en el botón
  function toggleDark(event) {
    const darkMode = document.body.classList.contains("dark-mode");
    document.body.classList.toggle("dark-mode", !darkMode);
    toggleDarkMode();
    saveDarkModePreference(!darkMode);
    loadDarkModePreference();
    if (darkMode) {
      document.querySelector("#dark-mode-toggle img").src = dark;
    } else {
      document.querySelector("#dark-mode-toggle img").src = light;
    }
  }

  $(document).ready(function () {
    $("#dark-mode-toggle").on("click", function (event) {
      toggleDark(event);
    });
  });

  window.onscroll = function () {
    onScroll();
  };
  function onScroll() {
    const navbarList = document.querySelector("#navbar ul");
    if (!navbarList) return; // Verificar si navbarList es null
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbarList.classList.add("navbar-scroll");
    } else {
      navbarList.classList.remove("navbar-scroll");
    }
  }
};

export default renderNavbar;
