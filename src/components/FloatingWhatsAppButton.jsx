// src/components/FloatingWhatsAppButton.jsx
import React, { useState } from 'react'; // Importa useState
import { FaWhatsapp } from 'react-icons/fa';
// Não precisa mais importar o arquivo CSS externo

const FloatingWhatsAppButton = () => {
  // Estado para controlar se o mouse está sobre o botão
  const [isHovering, setIsHovering] = useState(false);

  // --- Definição dos Estilos Inline ---

  const baseStyle = {
    position: 'fixed',
    width: '60px',
    height: '60px',
    bottom: '30px',
    right: '30px',
    backgroundColor: '#25d366',
    color: '#FFF',
    borderRadius: '50%',
    textAlign: 'center',
    fontSize: '35px',
    boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
    zIndex: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out', // Adiciona transição para backgroundColor
    textDecoration: 'none',
    cursor: 'pointer', // Adiciona cursor de ponteiro
  };

  // Estilos adicionais para aplicar no hover
  const hoverStyle = {
    transform: 'scale(1.1)',
    backgroundColor: '#1ebe5b', // Muda a cor de fundo no hover
  };

  // Combina os estilos: aplica hoverStyle se isHovering for true
  const combinedStyle = {
    ...baseStyle,
    ...(isHovering ? hoverStyle : {}), // Adiciona estilos de hover condicionalmente
  };

  // --- Lógica do Componente ---
  const phoneNumber = "554484385955";
  const message = "Oi! Estava no site e gostaria de mais informações.";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      style={combinedStyle} // Aplica o objeto de estilo combinado
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      onMouseEnter={() => setIsHovering(true)} // Ativa o estado de hover
      onMouseLeave={() => setIsHovering(false)} // Desativa o estado de hover
    >
      {/* O ícone não precisa de 'style' se já estiver centralizado pelo 'a' */}
      <FaWhatsapp />
    </a>
  );
};

export default FloatingWhatsAppButton;