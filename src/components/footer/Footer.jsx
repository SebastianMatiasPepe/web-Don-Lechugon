import React, { Component } from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import "./Footer.css"

export default function Footer() {
  return (
    <>
      <footer id='wp'>
        <div className="social-icons">
          <a href="mailto:donlechugon@gmail.com">
            <i ><FaEnvelope/></i>
          </a>
          <a href="https://www.instagram.com/don.lechugon/">
            <i ><FaInstagram/></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=donlechugon">
            <i ><FaWhatsapp/></i>
          </a>
        </div>
        <h3>Todos los Derechos Reservados || DonLechugon </h3>
      </footer>
    </>
  );
}
