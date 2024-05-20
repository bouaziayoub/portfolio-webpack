import "./accordion.css";

const renderAccordion = ({ sections }) => {
  const renderSection = (section, index) => {
    return `
      <div class="accordion-item">
        <div class="accordion-title sub-title-section">
          <h2>${section.title}</h2>
        </div>
        <div class="accordion-header" data-index="${index}">
          <button>${section.subTitle}</button>
          <img src="https://img.icons8.com/ios/452/expand-arrow.png" class="arrow-icon" alt="arrow-icon">
        </div>
        <div class="accordion-content">
          ${section.content
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

  const handleAccordionClick = (event) => {
    const header = event.target.closest('.accordion-header');
    if (header) {
      const content = header.nextElementSibling;
      content.classList.toggle("active");
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
