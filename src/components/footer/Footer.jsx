import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer>
        <div className="social-icons">
          <a href="mailto:donlechugon@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a href="https://www.instagram.com/don.lechugon/">
            <i className="fa-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=donlechugon">
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
        <h3>Todos los Derechos Reservados || DonLechugon </h3>
      </footer>
    </>
  );
}
