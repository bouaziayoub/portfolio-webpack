import "./contact.css";

const renderContact = () => {
  const root = document.querySelector(".root");

  root.innerHTML += `
    <div class="contact">
    <div class="contact-header title-section slide-top">
      <h2>Contacto</h2>
    </div>

    <div class="contact-container slide-top">

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


      <div class="form-message ">
      <h3 class ="sub-title-section">¿Tienes alguna pregunta o comentario?</h3>
      <div class="form-message-header">
        <p>Envíanos un mensaje y te responderemos lo antes posible.</p>
     
        <button id="show-form-btn" class="show-form-btn">Enviar Mensaje</button>
        </div> 
        <form class="contact-form">
            <div class="form-group">
             
              <input type="text" id="name" name="name" placeholder="Nombre">
            </div>
            <div class="form-group">
              <input type="email" id="email" name="email" placeholder="E-mail">
            </div>
            <div class="form-group">
              <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  `;

  const toggleForm = (event) => {
    const contactForm = event.target
      .closest(".contact")
      .querySelector(".contact-form");
    contactForm.classList.toggle("active-form");
  };

  root.addEventListener("click", (event) => {
    if (event.target.matches("#show-form-btn")) {
      toggleForm(event);
    }
  });
};

export default renderContact;
