// Jumbotron.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  // Estado para controlar o hover do botão (ainda necessário)
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  // --- Estilos Essenciais ---

  // Estilo principal do Jumbotron
  const jumbotronStyle = {
    backgroundColor: "#d8cba3",
    color: "#ffffff",
    padding: "2rem 1rem", // Usando valores mobile como base
    borderRadius: "8px",
    textAlign: "center",
    fontFamily: "'Asbigan', sans-serif",
    marginTop: '30px', // Mantém espaço acima
  };

  // Estilo do container de conteúdo
  const contentStyle = {
    maxWidth: "800px",
    width: "90%",
    margin: "0 auto",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centraliza o parágrafo e o botão
  };

  // Estilo para o parágrafo de chamada
  const paragraphStyle = {
    fontSize: '1.2rem', // Tamanho mobile
    fontWeight: 'bold',
    // Ajuste a margem conforme necessário agora que a lista saiu
    margin: '10px 0 25px 0', // Menos margem superior, mantém inferior antes do botão
    color: "#ffffff",
    lineHeight: '1.5', // Adiciona um pouco de espaço entre linhas se o texto quebrar
  };

  // Estilo base do botão
  const buttonStyleBase = {
    backgroundColor: "#454431",
    padding: "0.8rem 1.6rem", // Padding mobile
    fontSize: "1rem",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    color: "white",
    fontFamily: "'Montserrat', sans-serif",
    textDecoration: "none",
    display: 'inline-block',
    transition: 'background-color 0.3s ease',
  };

  // Estilo final do botão com hover
  const finalButtonStyle = {
    ...buttonStyleBase,
    backgroundColor: isButtonHovered ? 'darkgreen' : buttonStyleBase.backgroundColor,
  };

  // --- REMOVIDOS ---
  // const productModels = [];
  // const listTitleStyle = {};
  // const listContainerStyle = {};
  // const listItemStyle = {};
  // --- FIM DOS REMOVIDOS ---

  return (
    <div style={jumbotronStyle}>
      <div style={contentStyle}>

        {/* Título e Container da Lista REMOVIDOS */}

        {/* Parágrafo de Chamada */}
        <p style={paragraphStyle}>
          Encontre aquilo que você e sua casa merecem
        </p>

        {/* Botão com Hover */}
        <Link
          to="/contato"
          style={finalButtonStyle}
          onMouseEnter={() => setIsButtonHovered(true)}
          onMouseLeave={() => setIsButtonHovered(false)}
        >
          Faça um Orçamento
        </Link>

      </div>
    </div>
  );
};

export default Jumbotron;