import "./Projects.css";
import card from "../card/card";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",

    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
  },
  {
    title: "Proyecto 2",
    description: "Descripción del proyecto 2.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["React", "Node.js"],
    url: "https://example.com/proyecto2",
  },
  {
    title: "Proyecto 3",
    description: "Descripción del proyecto 3.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["Angular", "TypeScript"],
    url: "https://example.com/proyecto3",
  },
  
  {
    title: "Proyecto 4",
    description: "Descripción del proyecto 4.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["Vue", "JavaScript"],
    url: "https://example.com/proyecto4",
  },
  {
    title: "Proyecto 5",
    description: "Descripción del proyecto 5.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://example.com/proyecto5",
  },
];

const renderProjects = () => {
  const root = document.querySelector(".root");
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
        ${projects.map((project) => card(project)).join("")}
      </div>
    </div>
  `;
  root.innerHTML += projectsHtml;
};

export default renderProjects;
