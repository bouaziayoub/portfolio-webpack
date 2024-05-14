import './navbar.css';

export function renderNavbar() {
  const root = document.querySelector('.root');
  root.innerHTML += `
    <nav id="navbar">
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
    </nav>
  `;
}
