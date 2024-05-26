import "./noteCard.css";

const noteCard = ({ title, content, date }, index) => {
  const colors = [
    "#f4f3f0cc",
    "#ede7de",
    "#bddff9",
    "#d094e5",
    "#a3dcd4",
    "#e8b89c",
    "#ffffff80",
    "#ffffff",
    "#1c1c1c",
  ];
  const backgroundColor = colors[index % colors.length];

  return `
    <div class="note-card " style="background-color: ${backgroundColor}">
      <div class="note-card-content">
        <h3 class="note-card-title">${title}</h3>
        <p class="note-card-date">${date}</p>
        <p class="note-card-description">${content}</p>
      </div>
    </div>
  `;
};

export default noteCard;
