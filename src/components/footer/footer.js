// import "./footer.css";

// const renderFooter = () => {
//     const footer = document.createElement("footer");
//     footer.className = "footer";
//     footer.innerHTML = `<p>© 2021 Ayoub Bouazi. All rights reserved.</p>`;
//     return footer;
//     }
// export default renderFooter;

import "./footer.css";

const renderFooter = () => {
  const root = document.querySelector(".root");
  const footerHtml = `
    <footer class="footer">
      <div class="footer-copy">
        <p>&copy; ${new Date().getFullYear()} Ayoub Bouazi · Todos los derechos reservados.</p>
      </div>
        <div class="footer-contact">
            <ul class="social-links">
                <li><a href="https://www.linkedin.com/in/ayoub-bouazi" target="_blank">LinkedIn</a></li>
                <li><a href="https://github.com/ayoubbouazi" target="_blank">GitHub</a></li>
                <li><a href="https://drive.google.com/file/d/1z6YJ9kX0j5JnR8v6VJQpP0M7Zk3v6i3U/view?usp=sharing" target="_blank">CV</a></li>
            </ul>
            <ul class="social-links">
                <li><a href="/contact">Contact</a></li>
                <li><a href="mailto:ayoub@gmail.com">Email</a></li>
            </ul>

        </div>
    </footer>
  `;
  root.innerHTML += footerHtml;
};

export default renderFooter;
