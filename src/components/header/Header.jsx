import "./Header.css"

export default function Header() {
  return (
    <>
      <nav className="nav">
        <div className="container">
          <h1>Don Lechugón</h1>
          <ul>
            <li>Inicio</li>
            <li>Servicio</li>
            <li>Contacto</li>
          </ul>
        </div>
      </nav>

      <div className="portada">
        <h1>Bienvenido a Don Lechugón</h1>
        <p>
          Producción y comercialización de vegetales hidropónicos Vivos!! Ahorro
          de más de 70% de agua
        </p>
      </div>
    </>
  );
}


