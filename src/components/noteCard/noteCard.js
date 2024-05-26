import "./noteCard.css";

const noteCard = ({ title, content, date }, index) => {
  return `
    <div class="note-card">
      <div class="note-card-content">
        <h3 class="note-card-title">${title}</h3>
        <p class="note-card-date">${date}</p>
        <p class="note-card-description">${content}</p>
      </div>
    </div>
  `;
};

export default noteCard;
