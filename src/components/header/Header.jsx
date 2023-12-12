import "./Header.css";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBurgerClick = () => {
    setMenuOpen(true);
  };

  const handleCloseClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className='nav'>
        <div className="container">
          <h1>Don Lechugón</h1>
          <ul className="lista">
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="#gal">Galeria</a>
            </li>
            <li>
              <a href="#wp">Contacto</a>
            </li>
          </ul>
        </div>
        <button className="burger-button" onClick={handleBurgerClick}>
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </button>
      </nav>

      <div
        className={`menu ${
          menuOpen ? "arrastar-a-la-pantalla" : "sacar-de-pantalla"
        }`}
      >
        <button className="close-button" onClick={handleCloseClick}>
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>
        <ul className="lista-menu">
          <li>
            <a href="">Inicio</a>
          </li>
          <li>
            <a href="#gal">Galeria</a>
          </li>
          <li>
            <a href="#wp">Contacto</a>
          </li>
        </ul>
      </div>

      <div className="imgBox">
        <img src="/assets/HEADER.jpeg" alt="description" />
      </div>
      <div className="portada"></div>
    </>
  );
}
