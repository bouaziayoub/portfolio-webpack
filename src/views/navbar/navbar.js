import "./navbar.css";

const renderNavbar = () => {
  const root = document.querySelector(".root");
  root.innerHTML += `
    <nav id="navbar">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/studies">Studies</a></li>
        <li><a href="/experience">Experience</a></li>
        <li><a href="/projects">Projects</a></li>
      <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  `;
};

export default renderNavbar;
