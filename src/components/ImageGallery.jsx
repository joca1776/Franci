// ImageGallery.jsx
import React from 'react';

// --- Imports das imagens diretamente aqui ---
import img1 from '../assets/009.jpg';
import img2 from '../assets/010.jpg';
import img3 from '../assets/011.jpg';
import img4 from '../assets/012.jpg';
import img5 from '../assets/013.jpg';
// -------------------------------------------

// Componente não recebe mais props, usa dados internos
const ImageGallery = () => {

  // Array de imagens definido internamente
  const images = [img1, img2, img3, img4, img5];

  // --- Estilos (mantidos como antes) ---
  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', // Colunas responsivas
    gap: '15px',
    padding: '20px 0', // Espaçamento vertical
    marginTop: '30px', // Adiciona espaço acima da galeria, separando do Jumbotron
  };

  const imageItemStyle = {
    width: '100%',
    height: '250px', // Altura fixa (ou use aspect-ratio)
    borderRadius: '8px',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  };

  return (
    // Adicionando um título opcional para a seção da galeria
    <div>
      <h2 style={{ textAlign: 'center', color: '#454431', fontFamily: "'Asbigan', sans-serif", marginBottom: '20px' }}>
      {/* -- */}
      </h2>
      <div style={galleryContainerStyle}>
        {/* Mapeia sobre o array de imagens interno */}
        {images.map((imgSrc, index) => (
          <div key={index} style={imageItemStyle} className="gallery-item">
            <img src={imgSrc} alt={`Galeria ${index + 1}`} style={imageStyle} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;