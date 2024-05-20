import "./contact.css";

const renderContact = () => {
  const root = document.querySelector(".root");

  root.innerHTML += `
    <div class="contact">
      <h2>Contacto</h2>
      <div class="contact-info">
        <div class="contact-item">
          <h3>Dirección:</h3>
          <p>123 Calle Principal, Ciudad, País</p>
        </div>
        <div class="contact-item">
          <h3>Teléfono:</h3>
          <p>+123 456 7890</p>
        </div>
        <div class="contact-item">
          <h3>Correo Electrónico:</h3>
          <p>correo@example.com</p>
        </div>
      </div>
      <button id="show-form-btn" class="show-form-btn">Enviar Mensaje</button>
      <form class="contact-form">
        <h3>Envíanos un mensaje</h3>
        <div class="form-group">
          <label for="name">Nombre:</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  `;

  const toggleForm = (event) => {
    const contactForm = event.target
      .closest(".contact")
      .querySelector(".contact-form");
    contactForm.classList.toggle("active");
  };

  root.addEventListener("click", (event) => {
    console.log(event.target);
    if (event.target.matches("#show-form-btn")) {
      toggleForm(event);
    }
  });
};

export default renderContact;
