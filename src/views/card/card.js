import "./card.css";

const card = ({ title, description, image, technologies, url }) => {
    return `
      <div class="card">
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
        <div class="card-content">
          <h2 class="card-title">${title}</h2>
          <p class="card-description">${description}</p>
        </div>
      </div>
    `;
  };
  
export default card;
