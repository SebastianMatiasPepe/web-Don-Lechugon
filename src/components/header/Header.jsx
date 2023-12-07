import "./Header.css"

export default function Header() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1>Don Lechugón</h1>
          <ul>
            <li><a href="">Inicio</a></li>
            <li><a href="#gal">Galeria</a></li>
            <li><a href="#wp">Contacto</a></li>
          </ul>
        </div>
      </nav>

      <div className="imgBox">
        <img src="/assets/HEADER.jpeg" alt="description" />
      </div>

      <div className="portada">
       
       
      </div>
    </>
  );
}


