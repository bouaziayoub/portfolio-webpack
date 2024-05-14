import './contact.css';

export function renderContact() {
  const root = document.querySelector('.root');
  root.innerHTML += `
    <div id="contact">
      <h1>Contact Page</h1>
      <p>Ponte en contacto con nosotros.</p>
    </div>
  `;
}
