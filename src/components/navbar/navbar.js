import "./navbar.css";

const renderNavbar = () => {
  const navbarHTML = `
    <nav id="navbar">
      <ul>
        <li><a href="/">Proyectos <span class="slash"> / </span></a></li>
        <li><a href="/arceca">Acerca de mí</a></li>
        <li><a href="/notes">Notes</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  `;

  const root = document.querySelector(".root");
  root.innerHTML += navbarHTML;

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
