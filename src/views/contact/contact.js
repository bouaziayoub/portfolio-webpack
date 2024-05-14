import "./contact.css";

const renderContact = () => {
  const root = document.querySelector(".root");
  root.innerHTML += `
    <div class="contact">
      <h2>Contact Page</h2>
    </div>
  `;
};

export default renderContact;
