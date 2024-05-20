import "./footer.css";
import { downloadSectionAsPDF } from "../../utils/downloadPdf"; // Importa la función para descargar PDF

const renderFooter = () => {
  const root = document.querySelector(".root");
  const footerHtml = `
    <footer class="footer">
      <div class="footer-copy">
        <p>&copy; ${new Date().getFullYear()} Ayoub Bouazi · Todos los derechos reservados.</p>
      </div>
      <div class="footer-contact">
        <ul class="social-links">
          <li><a href="https://www.linkedin.com/in/ayoub-bouazi" target="_blank">LinkedIn</a></li>
          <li><a href="https://github.com/ayoubbouazi" target="_blank">GitHub</a></li>
          <li><a id="cv-link" href="#">CV</a></li> <!-- Cambia el href a "#" -->
        </ul>
        <ul class="social-links">
          <li><a href="#" id="contact-link">Contact</a></li> <!-- Cambia el href a "#" y agrega un id -->
          <li><a href="#" id="email-link">Email</a></li> <!-- Cambia el href a "#" y agrega un id -->
        </ul>
      </div>
    </footer>
  `;
  root.innerHTML += footerHtml;

  // Agrega el evento de clic al enlace de CV
  const cvLink = document.getElementById('cv-link');
  cvLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    downloadSectionAsPDF('.acerca', 'acerca-de-mi.pdf'); // Llama a la función para descargar el PDF
  });

  // Agrega el evento de clic al enlace de contacto
  const contactLink = document.getElementById('contact-link');
  contactLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    // Coloca aquí el código para manejar el enlace de contacto
  });

  // Agrega el evento de clic al enlace de correo electrónico
  const emailLink = document.getElementById('email-link');
  emailLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    // Abre el cliente de correo electrónico del usuario
    window.location.href = 'mailto:ayoub@gmail.com';
  });
};

export default renderFooter;
