import Header from "./components/header/Header"
import Info from "./components/info/Info"
import Slider from "./components/slider/Slider"
import Galeria from "./components/galeria/Galeria"
import Footer from "./components/footer/Footer"
import "./App.css";

export default function App(){
  return(
    <>
      <Header />
      <Info />
      <Slider />
      <Galeria />
      <Footer />
    </>
  )
}