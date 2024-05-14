import "./home.css";

const renderHome = () => {
  const root = document.querySelector(".root");
  root.innerHTML += `
    <div class="home">
      <h1>Home Page</h1>
      <p>¡Bienvenidos a mi portafolio!</p>
      <p>¡Hola! Soy Ayoub Bouazi, un desarrollador web junior. ¡Gracias por visitar mi portafolio!</p>
      <p>¡Aquí encontrarás información sobre mis proyectos, experiencia laboral, estudios y cómo contactarme!</p>
      <p>¡Espero que disfrutes tu visita!</p>
      <a class="btn" href="/contact">Contact Me</a>
    </div>
  `;
  // const button = document.querySelector(".btn");
  // button.addEventListener("click", () => {
  //   window.history.pushState({}, "Contact", window.location.origin + "/contact"); // push to history API the new path "/contact"
  //   const event = new Event("popstate"); // create popstate event
  //   window.dispatchEvent(event); // trigger popstate event

  // });
};

export default renderHome;
