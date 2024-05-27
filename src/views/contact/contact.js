import "./contact.css";
import $ from "jquery"; // Importa jQuery

const renderContact = () => {
  const root = $(".root"); // Selector de jQuery

  root.append(`
  <section class="custom-contact">
    <div class="contact">
      <div class="contact-header slide-top">
        <h2 class="title-section">Contacto</h2>
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

        <div class="form-message">
          <h3 class="sub-title-section">¿Tienes alguna pregunta o comentario?</h3>
          <div class="form-message-header">
            <p>Envíanos un mensaje y te responderemos lo antes posible.</p>
            <button id="show-form-btn" class="show-form-btn">Enviar Mensaje</button>
          </div> 
          <form class="contact-form">
            <div class="form-group">
              <input type="text" id="name" name="name" placeholder="Nombre">
            </div>
            <div class="form-group">
              <input type="text" id="email" name="email" placeholder="E-mail">
            </div>
            <div class="form-group">
              <textarea id="message" name="message" rows="4" placeholder="Message"></textarea>
            </div>
            <button id="btnEnviar" type="submit">Enviar</button>
            <span class="validate-msg"></span>
          </form>
        </div>
      </div>
    </div>
  </section>
  `);

  // Función para manejar el clic en el botón
  const toggleForm = (event) => {
    const contactForm = $(event.target)
      .closest(".contact")
      .find(".contact-form");
    contactForm.toggleClass("active-form");
  };

  // Adjunta el evento al contenedor del formulario después de renderizarlo
  $(document).ready(function () {
    $(".contact").on("click", "#show-form-btn", function (event) {
      toggleForm(event);
    });
  });

  // Validar el formulario
  root.on("submit", ".contact-form", (event) => {
    event.preventDefault();
    const validateMsg = $(event.target).find(".validate-msg");
    const form = event.target;
    // regex email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    if (!name || !email || !message) {
      validateMsg.text("Por favor, completa todos los campos");
      validateMsg.css({ color: "red", display: "block" });
    } else if (!emailRegex.test(email)) {
      validateMsg.text("Por favor, introduce un email válido");
      validateMsg.css({ color: "red", display: "block" });
    } else {
      validateMsg.text("Mensaje enviado correctamente");
      validateMsg.css({ color: "green", display: "block" });
      form.reset();
    }
  });
};

export default renderContact;
