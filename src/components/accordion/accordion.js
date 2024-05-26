import "./accordion.css";
import arrow from "../../assets/img/logo/expand-arrow.png";
const renderAccordion = ({ sections }) => {
  const renderSubsection = (subsection) => {
    return `
      <div class="accordion-subsection">
        <div class="accordion-header">
          <button>${subsection.subTitle}</button>
          <img src= ${arrow} class="arrow-icon" alt="arrow-icon">
        </div>
        <div class="accordion-content">
          ${subsection.content
            .map(
              (item) => `
            <div class="accordion-content-item">
              <h3>${item.title}</h3>
              <p>${item.description}</p>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
  };

  const renderSection = (section) => {
    return `
      <div class="accordion-item">
        <div class="accordion-title">
          <h2 class="sub-title-section">${section.title}</h2>
        </div>
        <div class="accordion-section-content">
          ${section.subsections.map(renderSubsection).join("")}
        </div>
      </div>
    `;
  };

  const handleAccordionClick = (event) => {
    const header = event.target.closest('.accordion-header');
    if (header) {
      const content = header.nextElementSibling;
      content.classList.toggle("show-content");
      const icon = header.querySelector("img");
      icon.classList.toggle("rotate");
    }
  };

  const accordionHTML = `
    <div class="accordion">
      ${sections.map(renderSection).join("")}
    </div>
  `;

  // Adjunta el evento al contenedor del acordeón después de renderizarlo
  setTimeout(() => {
    const headers = document.querySelectorAll(".accordion-header");
    headers.forEach(header => {
      header.addEventListener("click", handleAccordionClick);
    });
  }, 0);

  return accordionHTML;
};

export default renderAccordion;
