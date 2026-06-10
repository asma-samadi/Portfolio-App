import '../styles/footer.css'

export default function Footer() {
    return (
      <footer>
        <p>
          © {new Date().getFullYear()} Asma Samadi. Built with
          <span> React</span> and <span>Vite</span>, styled <br /> with <span> CSS</span>
          , and deployed on
          <span>
            <a href="https://github.com/asma-samadi/Portfolio-App"> GitHub </a>
          </span>
          Pages.
        </p>
      </footer>
    );
}
