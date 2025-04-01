// ProductList.jsx
import React from 'react';

// Componente não recebe mais props, usa dados internos
const ProductList = () => {

  // Lista de modelos definida internamente
  const productModels = [
    "Vertical", "Horizontal", "Rolo", "Romana", "Painel",
    "Prega Wave", "Prega Macho", "Prega Fêmea", "Prega Americana", "Xales"
  ];

  // --- Estilos (mantidos como antes) ---
  const listContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', // Grid responsivo
    gap: '20px',
    padding: '20px 0', // Espaçamento vertical
    fontFamily: "'Montserrat', sans-serif",
    marginTop: '30px', // Adiciona espaço acima da lista, separando do item anterior
  };

  const cardStyle = {
    backgroundColor: '#FDFDFD',
    color: '#454431',
    padding: '20px 15px',
    borderRadius: '8px',
    textAlign: 'center',
    fontSize: '0.95em',
    border: '1px solid #EAEAEA',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.08)',
  };

  return (
    // Adicionando um título opcional para a seção de produtos
    <div>
      <h2 style={{ textAlign: 'center', color: '#454431', fontFamily: "'Asbigan', sans-serif", marginBottom: '20px' }}>
        Nossos Modelos
      </h2>
      <div style={listContainerStyle}>
        {/* Mapeia sobre o array de modelos interno */}
        {productModels.map((model, index) => (
          <div key={index} style={cardStyle} className="product-card">
            {model}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;