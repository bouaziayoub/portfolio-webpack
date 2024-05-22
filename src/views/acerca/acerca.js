import "./acerca.css";
import perfilImg from "../../assets/img/acerca/perfil.png"; // Importa la imagen
import { renderAccordion } from "../../components/exportComponents"; // Importa el componente de acordeón

import sectionsJson from "../../assets/json/sections.json"; // Importa el archivo JSON

const renderAcerca = () => {
  const root = document.querySelector(".root");

  const { sections } = sectionsJson;

  const acerca = `
    <section class="acerca">
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
      
    </section>
  `;
  root.innerHTML += acerca;
};

export default renderAcerca;
