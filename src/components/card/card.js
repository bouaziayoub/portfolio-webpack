import "./card.css";

const card = ({ title, description, image, technologies, url }, index) => {
  const colors = [
    "#d094e5",
    "#a3dcd4",
    "#2f2e2e8a",
    "#e8b89c",
    "#ffffff80",
    "#ffffff",
    "#f4f3f0cc",
    "#ede7de",
    "#bddff9",
    "#1c1c1c",
  ];
  const backgroundColor = colors[index % colors.length]; // Ciclo de colores

  const cardClass = index % 3 === 0 ? "card-small" : "card-large";
  return `
   <div class="card ${cardClass}" style="background-color: ${backgroundColor};">
      <div class="card-content">
        <h2 class="card-title">${title}</h2>
        <p class="card-description">${description}</p>
      </div>  
      <div class="card-img-container">
          <img src="${image}" alt="${title}" class="card-img">
          <div class="card-tech tech-url">
            <div>
              ${technologies.map((tech) => `<span>${tech}</span>`).join(", ")}
            </div>
            <div class="card-link">
              ${url ? `<a href="${url}" target="_blank">Ver proyecto</a>` : ""}
            </div>
          </div>
        </div>
    </div>
  `;
};

export default card;