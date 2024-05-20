import "./Projects.css";
import card from "../../components/card/card.js";

const projects = [
  {
    title: "Proyecto 1",
    description: "Descripción del proyecto 1.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",

    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://example.com/proyecto1",
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
  {
    title: "Proyecto 6",
    description: "Descripción del proyecto 6.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["React", "Node.js"],
    url: "https://example.com/proyecto6",
  },
];

const projetsInprogres = [
  {
    title: "Proyecto 7",
    description: "Descripción del proyecto 7.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["Angular", "TypeScript"],
    url: "https://example.com/proyecto7",
  },
  {
    title: "Proyecto 8",
    description: "Descripción del proyecto 8.",
    image:
      "https://signoscv.com/wp-content/uploads/2022/04/pagina-web-1-930x620.jpg",
    technologies: ["Vue", "JavaScript"],
    url: "https://example.com/proyecto8",
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
         ${projects.map((project, index) => card(project, index)).join("")}
      </div>
      <div class="proyects-inprogres">
        <h2 class="title-section">Proyectos en progreso</h2>
        <div class="proyects-content">
          <p>Estos son algunos de los proyectos en los que estoy trabajando actualmente.</p>
        </div>
        <div class="projects-grid">
          ${projetsInprogres
            .map((project, index) => card(project, index))
            .join("")}
        </div>
    </div>
  `;
  root.innerHTML += projectsHtml;
};

// const renderProjects = () => {
//   const root = document.querySelector(".root");
//   const projectsHtml = `
//     <div class="projects">
//       <h1 class="title-section slide-top">
//         <span class="firstName">Hola! Soy Ayoub.</span>
//         <span class="rol">Programador Web.</span>
//       </h1>
//       <div class="projects-content">
//         <p>Como desarrollador fullstack, tengo experiencia en el diseño y la implementación de soluciones web completas,</p>
//         <p>desde la interfaz de usuario hasta la lógica del servidor y la gestión de bases de datos, utilizando tecnologías</p>
//         <p>modernas y metodologías ágiles para crear aplicaciones eficientes y escalables</p>
//       </div>
//       <div class="projects-grid">
//         ${projects.map((project, index) => card(project, index)).join("")}
//       </div>
//     </div>
//   `;
//   root.innerHTML += projectsHtml;
// };

export default renderProjects;
