import "./notes.css"; // Importar estilos de notas
import { noteCard } from "../../components/exportComponents"; // Importar componente de tarjeta de nota
import {renderNavbar, renderFooter} from "../../components/exportComponents"; // Importar función de renderizado de navbar
import notes from "../../assets/json/notes.json"; // Importar archivo JSON con las notas


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
      <p class="notes-description slide-top">Explora una colección de notas sobre desarrollo web, programación, tecnología y más.</p>
      <div class="notes-grid">
        ${paginatedNotes.map((note, index) => noteCard(note, index)).join("")}
      </div>
      ${renderPaginationControls(page)}
    </section>
  `;

  root.innerHTML = notesHtml;

  root.innerHTML += "";
  // rendezar navbar
  renderNavbar();
  // renderizar footer si no existe en la página para evitar duplicados
  if (!document.querySelector(".footer")) {
    renderFooter();
  }
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
