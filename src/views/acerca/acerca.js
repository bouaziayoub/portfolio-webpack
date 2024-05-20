import "./acerca.css";
import perfilImg from "../../img/acerca/perfil.png"; // Importa la imagen
import { renderAccordion } from "../../components/exportComponents"; // Importa el componente de acordeón

const renderAcerca = () => {
  const root = document.querySelector(".root");

  const sections = [
    {
      title: "Experiencia Laboral",
      subTitle: "Empresa XYZ",
      content: [
        {
          title: "Empresa XYZ",
          description:
            "Desarrollador Web. Responsabilidades y logros en cada puesto.",
        },
      ],
    },
    {
      title: "Educación",
      subTitle: "Universidad ABC",
      content: [
        {
          title: "Universidad ABC",
          description:
            "Licenciatura en Ciencias de la Computación. Detalles de estudios universitarios y otros cursos relevantes.",
        },
      ],
    },
    {
      title: "Habilidades",
      subTitle: "Habilidades Técnicas y Blandas",
      content: [
        {
          title: "Habilidades Técnicas",
          description: "Programación, diseño gráfico, etc.",
        },
        {
          title: "Habilidades Blandas",
          description: "Liderazgo, comunicación, etc.",
        },
      ],
    },
    {
      title: "Certificaciones",
      subTitle: "Certificaciones Profesionales",
      content: [
        {
          title: "Certificación XYZ",
          description: "Descripción de la certificación y su relevancia.",
        },
      ],
    },
    {
      title: "Idiomas",
      subTitle: "Idiomas y Competencia",
      content: [
        {
          title: "Inglés",
          description: "Nivel Avanzado",
        },
        {
          title: "Francés",
          description: "Nivel Intermedio",
        },
      ],
    },
    {
      title: "Intereses y Aficiones",
      subTitle: "Intereses Personales",
      content: [
        {
          title: "Deportes",
          description: "Fútbol, Tenis",
        },
        {
          title: "Viajes",
          description: "Explorar nuevos lugares y culturas.",
        },
      ],
    },
  ];

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
