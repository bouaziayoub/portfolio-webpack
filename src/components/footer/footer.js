// footer.js
import "./footer.css";
import { downloadSectionAsPDF } from "../../utils/downloadPdf"; // Importa la función para descargar PDF

const renderFooter = () => {
  const root = document.querySelector(".root");
  const footerHtml = `
    <footer class="footer d-flex justify-content-around py-5 fw-bold">
      <div class="footer-copy text-success d-flex justify-content-center align-items-center p-2">
        <p>&copy; ${new Date().getFullYear()} Ayoub Bouazi · Todos los derechos reservados.</p>
      </div>
      <div class="footer-contact text-success d-flex justify-content-center align-items-start p-2">
        <ul class="list-unstyled">
          <li class="py-2"><a href="https://www.linkedin.com/in/ayoub-bouazi" target="_blank" rel="noopener noreferrer" class="text-success text-decoration-none">LinkedIn</a></li>
          <li class="py-2"><a href="https://github.com/ayoubbouazi" target="_blank" rel="noopener noreferrer" class="text-success text-decoration-none">GitHub</a></li>
          <li class="py-2"><a id="cv-link" href="#" class="text-success text-decoration-none">CV</a></li>
        </ul>
        <ul class="list-unstyled">
          <li class="py-2"><a href="#" id="contact-link" class="text-success text-decoration-none">Contact</a></li>
          <li class="py-2"><a href="#" id="email-link" class="text-success text-decoration-none">Email</a></li>
        </ul>
      </div>
    </footer>
  `;
  root.innerHTML += footerHtml;

  // Agrega el evento de clic al enlace de CV
  const cvLink = document.getElementById('cv-link');
  cvLink.addEventListener('click', (event) => {
    event.preventDefault(); // Evita el comportamiento predeterminado del enlace
    downloadSectionAsPDF('.acerca', 'Ayoub_Bouazi_Cv.pdf'); // Llama a la función para descargar el PDF
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
