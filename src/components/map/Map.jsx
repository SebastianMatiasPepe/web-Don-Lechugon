import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import  "./Map.css"


const Map = () => {
  const position = [-38.05255918995808, -57.56565259304688]; // Latitud y longitud inicial

  return (
  
    <section className="container-map">
       
      <div style={{ overflow: "hidden", width: "90%",  margin: '0 auto' }}>
        <MapContainer
          center={position}
          zoom={13}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Map;
