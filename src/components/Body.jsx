// Body.jsx
import React from "react";
import Jumbotron from "./Jumbotron";
import Poster from "./Poster";
import ImageGallery from "./ImageGallery"; // Importa a galeria
import ProductList from "./ProductList";   // Importa a lista
import "./Body.css"; // Importando o CSS externo
import FloatingWhatsAppButton from "./FloatingWhatsAppButton";

const Body = () => {
  return (
    <div className="body-content">
    <main className="body">
      <div className="section">
        <Poster />
      </div>
      <div className="section">
        <Jumbotron />
        <ImageGallery />
        <FloatingWhatsAppButton />

      </div>
    </main>
    </div>
  );
};

export default Body;
