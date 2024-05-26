import "./notes.css"; // Importar estilos de notas
import { noteCard } from "../../components/exportComponents"; // Importar componente de tarjeta de nota
import renderNavbar from "../../components/navbar/navbar"; // Importar función de renderizado de navbar

const notes = [
  {
    title: "Cómo optimizar el rendimiento de una aplicación React",
    content:
      "En esta nota, exploro diversas estrategias y técnicas para mejorar el rendimiento de aplicaciones React, incluyendo el uso de React.memo, la carga de componentes de forma asíncrona y más.",
    date: "Mayo 1, 2024",
  },
  {
    title: "Introducción a GraphQL: Ventajas y desventajas",
    content:
      "GraphQL es una alternativa a REST que permite a los clientes pedir exactamente los datos que necesitan. En esta nota, discuto sus principales ventajas, desventajas y cuándo es adecuado utilizarlo en tus proyectos.",
    date: "Abril 25, 2024",
  },
  {
    title: "Deploy de una aplicación Node.js en Heroku",
    content:
      "Despliega tu aplicación Node.js fácilmente en Heroku siguiendo esta guía paso a paso. Incluye la configuración de variables de entorno y el uso de herramientas de CI/CD para automatizar el proceso.",
    date: "Abril 15, 2024",
  },
  {
    title: "Buenas prácticas en el diseño de APIs REST",
    content:
      "En esta nota, cubro las mejores prácticas para diseñar APIs RESTful robustas y escalables, incluyendo la gestión de errores, paginación, y la implementación de autenticación y autorización.",
    date: "Abril 10, 2024",
  },
  {
    title: "Cómo configurar Webpack para proyectos modernos de JavaScript",
    content:
      "Aprende a configurar Webpack desde cero para optimizar la construcción de proyectos modernos de JavaScript, incluyendo la configuración de loaders, plugins y la optimización de rendimiento.",
    date: "Abril 5, 2024",
  },
  {
    title: "Introducción a Docker: Conceptos básicos y uso en proyectos",
    content:
      "Descubre qué es Docker, cómo funciona y cómo puedes utilizarlo en tus proyectos para crear entornos de desarrollo reproducibles y facilitar la implementación de aplicaciones en producción.",
    date: "Marzo 30, 2024",
  },
  {
    title: "Estrategias para la gestión de estado en aplicaciones React",
    content:
      "En esta nota, analizo diferentes estrategias para gestionar el estado en aplicaciones React, incluyendo el uso de Context API, Redux, y bibliotecas como Recoil y Zustand.",
    date: "Marzo 20, 2024",
  },
  {
    title:
      "Guía de inicio rápido de TypeScript para desarrolladores de JavaScript",
    content:
      "Aprende los conceptos básicos de TypeScript y cómo puedes empezar a utilizarlo en tus proyectos de JavaScript para mejorar la calidad del código, reducir errores y facilitar el mantenimiento a largo plazo.",
    date: "Marzo 10, 2024",
  },
  {
    title: "Cómo crear un servidor RESTful con Express y MongoDB",
    content:
      "En esta nota, te guío a través del proceso de creación de un servidor RESTful utilizando Express.js y MongoDB, incluyendo la configuración de rutas, la conexión a la base de datos y la implementación de operaciones CRUD.",
    date: "Marzo 5, 2024",
  },
  {
    title: "Principios básicos de seguridad informática para desarrolladores",
    content:
      "Descubre los principios básicos de seguridad informática que todo desarrollador debería conocer, incluyendo la protección contra ataques comunes, la gestión de contraseñas y la implementación de medidas de seguridad en aplicaciones web.",
    date: "Febrero 28, 2024",
  },
  {
    title: "Introducción a las Progressive Web Apps (PWAs)",
    content:
      "Aprende qué son las Progressive Web Apps, por qué son importantes y cómo puedes crear aplicaciones web progresivas que funcionen offline, se carguen rápidamente y ofrezcan una experiencia de usuario similar a la de una aplicación nativa.",
    date: "Febrero 20, 2024",
  },
];

const notesPerPage = 8; // Número de notas por página
let currentPage = 1;

const renderNotes = (page = 1) => {
  const root = document.querySelector(".root");
  const start = (page - 1) * notesPerPage;
  const end = page * notesPerPage;
  const paginatedNotes = notes.slice(start, end);

  const notesHtml = `
    <section class="notes">
      <h2 class="title-section slide-top">Notas Recientes</h2>
      <div class="notes-grid">
        ${paginatedNotes.map((note, index) => noteCard(note, index)).join("")}
      </div>
      ${renderPaginationControls(page)}
    </section>
  `;

  root.innerHTML = notesHtml;

  // rendezar navbar
  renderNavbar();
};

const renderPaginationControls = (page) => {
  const totalPages = Math.ceil(notes.length / notesPerPage);

  return `
    <div class="pagination-controls">
      <button class="pagination-btn" onclick="changePage(${page - 1})" ${
    page === 1 ? "disabled" : ""
  }>Anterior</button>
      ${Array.from(
        { length: totalPages },
        (_, i) => `
        <button class="pagination-btn ${
          page === i + 1 ? "active" : ""
        }" onclick="changePage(${i + 1})">${i + 1}</button>
      `
      ).join("")}
      <button class="pagination-btn" onclick="changePage(${page + 1})" ${
    page === totalPages ? "disabled" : ""
  }>Siguiente</button>
    </div>
  `;
};

window.changePage = (page) => {
  if (page < 1 || page > Math.ceil(notes.length / notesPerPage)) return;
  currentPage = page;
  renderNotes(page);
};

export default renderNotes;
