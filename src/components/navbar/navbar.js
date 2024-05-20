import "./navbar.css";

const renderNavbar = () => {
  const root = document.querySelector(".root");
  root.innerHTML += `
    <nav id="navbar">
      <ul>
        <li><a href="/">Proyectos <span class="slash"> / </span></a></li>
        <li><a href="/arceca">Acerca de mí</a></li>
        <li><a href="/studies">Studies</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  `;

  window.onscroll = function () {
    myFunction();
  };
  function myFunction() {
    const navbarList = document.querySelector("ul");
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
