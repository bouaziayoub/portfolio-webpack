import './home.css';

export function renderHome() {
  const root = document.querySelector('.root');
  root.innerHTML += `
    <div id="home">
      <h1>Home Page</h1>
      <p>Bienvenido a la página de inicio.</p>
    </div>
  `;
}
