import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";
import L from 'leaflet';

const icon = L.icon({
  iconUrl: "/assets/marker-icon-2x.png",
  iconSize: [25, 41], // Adjust the size as needed
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});


const Map = () => {
  const position = [-38.05255918995808, -57.56565259304688]; // Latitud y longitud inicial
  const positionAbueloCoco = [-38.098894961210576, -57.56866975767042];
  const positionLasVitullas = [-38.06988330315738, -57.55818144048308];
  const positionLaHuertaDeLasMellis = [-38.060603571133825, -57.57166986544151];
  const positionLasMellisVerduleria = [
    -38.041931585897636, -57.547334915340834,
  ];
  const positionLaHuertaDeLasMellis2 = [-38.00034193764707, -57.55137402698873];
  const positionLaHuertaDeLasMellis3 = [-37.96220876603227, -57.56069491534085];
  const positionArmonia = [-38.00006423791636, -57.55221424869447];
  return (
    <>
    <div className="titulo">

      <h1>Nuestras Sucursales</h1>
    </div>
      <section className="container-map">
        <div style={{ overflow: "hidden", width: "90%", margin: "0 auto" }}>
          <MapContainer
            center={position}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={positionAbueloCoco} icon={icon}>
              <Popup>almacen:El abuelo coco</Popup>
            </Marker>
            <Marker position={positionLasVitullas} icon={icon}>
              <Popup>Las Vituallas • Supermercado</Popup>
            </Marker>
            <Marker position={positionLaHuertaDeLasMellis} icon={icon}>
              <Popup>La Huerta De Las Mellis</Popup>
            </Marker>
            <Marker position={positionLasMellisVerduleria} icon={icon}>
              <Popup>Las Mellis Verduleria</Popup>
            </Marker>
            <Marker position={positionLaHuertaDeLasMellis2} icon={icon}>
              <Popup>La Huerta de las Mellis</Popup>
            </Marker>
            <Marker position={positionArmonia} icon={icon}>
              <Popup>Armonia</Popup>
            </Marker>
            <Marker position={positionLaHuertaDeLasMellis3} icon={icon}>
              <Popup>La Huerta de las Mellis</Popup>
            </Marker>
          </MapContainer>
        </div>
      </section>
    </>
  );
};

export default Map;
