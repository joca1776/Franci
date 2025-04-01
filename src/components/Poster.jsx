import React, { useState, useEffect } from "react";
import poster1 from "../assets/003.jpg";
import poster2 from "../assets/002.jpg";
import poster3 from "../assets/001.jpg";
// Não precisamos mais importar Poster.css se ele não for usado em outros lugares

const Poster = () => {
  const images = [poster1, poster2, poster3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // --- DEFINIÇÃO DOS ESTILOS COMO OBJETOS ---

  const carouselStyle = {
    position: "relative",
    width: "100%",
    overflow: "hidden",
    // Adicione um max-width aqui se quiser limitar o carrossel todo em telas grandes
    // maxWidth: '1200px',
    // margin: '0 auto', // Para centralizar se usar maxWidth
  };

  const carouselInnerStyle = {
    width: "100%",
  };

  const carouselImageStyle = {
    // --- AJUSTES PRINCIPAIS AQUI ---
    width: "100%",          // Faz a imagem ocupar toda a largura disponível
    maxWidth: "800px",      // Define uma largura MÁXIMA (ajuste conforme necessário para desktop)
    height: "auto",         // Mantém a proporção da imagem
    display: "block",       // Comportamento padrão para imagens responsivas
    margin: "0 auto",       // Centraliza a imagem horizontalmente se maxWidth for atingido
    // -----------------------------
  };

  const buttonBaseStyle = { // Estilo base para os botões
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    background: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    zIndex: 10, // Garante que fiquem sobre a imagem
  };

  const prevButtonStyle = {
    ...buttonBaseStyle, // Herda o estilo base
    left: 0,
  };

  const nextButtonStyle = {
    ...buttonBaseStyle, // Herda o estilo base
    right: 0,
  };

  const indicatorsContainerStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    zIndex: 10, // Garante que fiquem sobre a imagem
  };

  const indicatorButtonStyle = (isActive) => ({ // Função para estilo dinâmico do indicador
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: isActive ? "white" : "rgba(255, 255, 255, 0.5)",
    border: "none",
    margin: "0 5px",
    padding: 0, // Remove padding padrão de botões
    cursor: "pointer",
  });

  // --- JSX USANDO OS OBJETOS DE ESTILO ---

  return (
    <div style={carouselStyle} className="carousel"> {/* Mantive a classe caso seja usada globalmente */}
      <div style={carouselInnerStyle} className="carousel-inner">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={carouselImageStyle} // Aplica o novo estilo da imagem
          className="carousel-image"
        />
      </div>
      <button onClick={goToPrevious} style={prevButtonStyle} className="carousel-control-prev">
        <span>&lt;</span>
      </button>
      <button onClick={goToNext} style={nextButtonStyle} className="carousel-control-next">
        <span>&gt;</span>
      </button>
      <div style={indicatorsContainerStyle} className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            style={indicatorButtonStyle(index === currentIndex)} // Aplica estilo dinâmico
            className={`carousel-indicator ${index === currentIndex ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`} // Boa prática para acessibilidade
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Poster;