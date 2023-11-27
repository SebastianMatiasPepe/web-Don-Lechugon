import { useState } from "react";
import "./App.css";

const App = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const changeSlide = (direction) => {
    const slidesLength = 3;

    if (direction === "up") {
      setActiveSlideIndex((prevIndex) => (prevIndex + 1) % slidesLength);
    } else if (direction === "down") {
      setActiveSlideIndex((prevIndex) =>
        prevIndex === 0 ? slidesLength - 1 : prevIndex - 1
      );
    }
  };

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

      <section className="info">
        <p>
          Cada vez más verdulerías que ofrecen verduras hidropónicas, que crecen
          sin estar en contacto con el suelo. Son más sabrosas, tienen menos
          contaminantes y se pueden cultivar en casa. La lechuga es la
          protagonista de nuestras ensaladas y no es para menos, ya que combina
          con cualquier otra verdura y aporta fibra, betacarotenos, vitaminas
          B1, B2, B3, A, E y C, potasio, sodio, calcio y magnesio. Por su alto
          contenido de hierro, como todas las hojas verdes, previene la anemia,
          el cansancio o la fatiga. Hoy son cada vez más los pequeños
          productores que ofrecen en Mendoza una lechuga más carnosa, limpia y
          jugosa que la que solemos consumir: se llama hidropónica y debe su
          nombre a que no necesita tierra para crecer. Al momento de comprarla
          la vas a reconocer porque viene con una raíz gruesa y húmeda, tiene
          hojas muy grandes y limpias, como lustradas, y es fácil de lavar, ya
          que no tiene rastros de tierra. Las ventajas del “cultivo
          hidropónico”, que crece de la mano de programas del Ministerio de
          Economía y Energía, son que se necesita nula superficie de tierra, se
          optimiza el uso del agua en una región desértica, el ciclo de
          crecimiento es más corto, es amigable con el medio ambiente y se puede
          hacer en la ciudad o en el campo..
        </p>
      </section>

      <div className="slider-container">
        <div
          className="left-slide"
          style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}
        >
          <div style={{ backgroundColor: "#FD3555" }}>
            <h1>Aeroponía</h1>
            <p>Sistema de cultivo hidropónico vertical</p>
          </div>
          <div style={{ backgroundColor: "#2A86BA" }}>
            <h1>Hidroponia</h1>
            <p>Hidroponia horizontal , Aeroponía NFT</p>
          </div>
          <div style={{ backgroundColor: "#252E33" }}>
            <h1>Rúcula </h1>
            <h1>hidropónica </h1>
            <p>Mas sabor , mejor textura , mayor duracion , sin pesticidas</p>
          </div>
        </div>
        <div 
        className="right-slide"
        style={{ transform: `translateY(-${activeSlideIndex * 100}vh)` }}
        >
          <div className="background1"></div>
          <div className="background2"></div>
          <div className="background3"></div>
        </div>
        <div className="action-buttons">
          <button className="down-button" onClick={() => changeSlide("down")}>
            <i className="fas fa-arrow-down"></i>
          </button>
          <button className="up-button" onClick={() => changeSlide("up")}>
            <i className="fas fa-arrow-up"></i>
          </button>
        </div>
      </div>

      <div className="galeria">
        <h2> Galería de Imágenes</h2>
        <div className="imagen-container">
          <img src="./assets/1.jpeg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
          <img src="./assets/img/lec.jpg" alt="" />
        </div>
      </div>

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
};

export default App;
