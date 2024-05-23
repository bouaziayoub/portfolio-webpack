import "./Projects.css";
import card from "../../components/card/card.js";
import sectionsJson from "../../assets/json/projects.json"; // Importa el archivo JSON con los proyectos

// Importa las imágenes de los proyectos
import proyect1 from "../../assets/img/projects/proyecto1.png";
import proyect2 from "../../assets/img/projects/proyecto2.png";
import proyect3 from "../../assets/img/projects/proyecto3.png";
import proyect4 from "../../assets/img/projects/proyecto4.png";
import proyect5 from "../../assets/img/projects/proeycto5.png";
import proyect6 from "../../assets/img/projects/proeycto6.png";
import proyectProcess1 from "../../assets/img/projects/proyecto-process1.png";
import proyectProcess2 from "../../assets/img/projects/proyecto-process2.png";

const images = {
  "proyecto1.png": proyect1,
  "proyecto2.png": proyect2,
  "proyecto3.png": proyect3,
  "proyecto4.png": proyect4,
  "proyecto5.png": proyect5,
  "proyecto6.png": proyect6,
  "proyecto-process1.png": proyectProcess1,
  "proyecto-process2.png": proyectProcess2
};

const renderProjects = () => {
  const root = document.querySelector(".root");

  // Destructura los datos del JSON
  const { projects, projectsInProgress } = sectionsJson;

  const projectsHtml = `
    <div class="proyects">
      <h1 class="title-section slide-top">
        <span class="firstName">Hola! Soy Ayoub.</span>
        <span class="rol">Programador Web.</span>
      </h1>
      <div class="proyects-content">
        <p>Como desarrollador fullstack, tengo experiencia en el diseño y la implementación de soluciones web completas,</p>
        <p>desde la interfaz de usuario hasta la lógica del servidor y la gestión de bases de datos, utilizando tecnologías</p>
        <p>modernas y metodologías ágiles para crear aplicaciones eficientes y escalables</p>
      </div>
      <div class="projects-grid">
         ${projects.map((project, index) => card({ ...project, image: images[project.image] }, index)).join("")}
      </div>
      <div class="proyects-inprogres">
        <h2 class="title-section">Proyectos en progreso</h2>
        <div class="proyects-content">
          <p>Estos son algunos de los proyectos en los que estoy trabajando actualmente.</p>
        </div>
        <div class="projects-grid">
          ${projectsInProgress.map((project, index) => card({ ...project, image: images[project.image] }, index)).join("")}
        </div>
      </div>
    </div>
  `;
  root.innerHTML += projectsHtml;
};

export default renderProjects;
