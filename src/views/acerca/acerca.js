import "./acerca.css";
import perfilImg from "../../assets/img/acerca/perfil.png"; // Importa la imagen
import { renderAccordion } from "../../components/exportComponents"; // Importa el componente de acordeón

import sectionsJson from "../../assets/json/acerca.json"; // Importa el archivo JSON

const renderAcerca = () => {
  const root = document.querySelector(".root");

  const { sections, skills, languages, interests } = sectionsJson;

  const levelToStars = (level) => {
    switch (level) {
      case "Nativo":
        return "★★★★★";
      case "Nivel Avanzado":
        return "★★★★☆";
      case "Nivel Intermedio":
        return "★★★☆☆";
      case "Nivel Básico":
        return "★★☆☆☆";
      default:
        return "☆☆☆☆☆";
    }
  };

  const renderList = (items, type) => {
    return items
      .map(
        (item) => `
        <div class="list-item">
          <h3>${item.title}</h3>
          ${type ? `<p>${levelToStars(item.description.match(/<span>(.*?)<\/span>/)[1])}</p>` : `<p>${item.description}</p>`}
        </div>
      `
      )
      .join("");
  };

  const acerca = `
    <section class="acerca">
    <div class="acerca-container">
      <h2 class="title-section slide-top">Soy Ayoub Bouazi.</h2>

      <div class="who-iam">
        <div class="profil-pic fade-in">
          <img src="${perfilImg}" alt="Perfil Ayoub" class="perfil-img"/>
          <p class="image-caption">Desarrollador apasionado y curioso, siempre en busca de nuevos desafíos.</p>
        </div>
        <div class="who-iam-desc">
          <h3 class="sub-title-section slide-top">Soy un desarrollador web con experiencia en tecnologías como HTML, CSS, JavaScript, React, Angular, Vue, Node.js, Express, MongoDB, entre otras.</h3>
          <p class="description slide-top">Me apasiona la programación y me encanta aprender cosas nuevas cada día.</p>
          <p class="description slide-top">Siempre estoy buscando nuevos retos y oportunidades para crecer profesionalmente.</p>
        </div>
      </div>
  
      ${renderAccordion({ sections })}

      <div class="additional-sections">
        <div class="section skills">
          <h2 class="sub-title-section">Habilidades</h2>
          <div class="skills-container">
            <div class="sub-section skills-tecnicas">
              <h3 class="sub-sub-title-section">Habilidades Técnicas</h3>
              <div class="skills-list">
                ${renderList(skills.tecnicas, "skills")}
              </div>
            </div>
            <div class="sub-section skills-blandas">
              <h3 class="sub-sub-title-section">Habilidades Blandas</h3>
              <div class="skills-list">
                ${renderList(skills.blandas, "skills")}
              </div>
            </div>
          </div>
        </div>
        <div class="section languages">
          <h2 class="sub-title-section">Idiomas</h2>
            <div class="languages-list">
              ${renderList(languages, "languages")}
            </div>
        </div>
        <div class="section interests">
          <h2 class="sub-title-section">Intereses y Aficiones</h2>
            <div class="interests-list">
            ${renderList(interests)}
            </div>
        </div>
      </div>
      </div>
    </section>
  `;
  root.innerHTML += acerca;
};

export default renderAcerca;
