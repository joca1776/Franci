import React from "react";
import dotNoiseImage from "../assets/dotnoise-light-grey.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";



const Contact = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    // Mantido o padding original do container de contato, ajuste se necessário
    padding: "170px 20px 80px 20px",
    width: "100%",
    margin: "0",
    boxSizing: "border-box",
    gap: "20px", // Gap entre itens diretos dentro do container (neste caso, só o contactStyle div)
    backgroundImage: `url(${dotNoiseImage})`,
  };

  // --- ESTILO ATUALIZADO ---
  const contactStyle = {
    backgroundColor: "#d8cba3",
    color: "#ffffff",
    padding: "30px 20px", // <--- ATUALIZADO para igualar servicesHeaderStyle
    borderRadius: "20px",
    textAlign: "center",
    fontFamily: "'Asbigan', sans-serif", // Certifique-se que a fonte está carregada
    width: "calc(100% - 40px)", // <--- ATUALIZADO para igualar servicesHeaderStyle
    maxWidth: "1200px", // <--- ATUALIZADO para igualar servicesHeaderStyle
    boxSizing: "border-box",
    marginBottom: '20px', // <--- ADICIONADO para igualar servicesHeaderStyle (opcional, para espaçamento)
    // Se precisar de mais espaço interno vertical, pode aumentar o padding top/bottom aqui:
    // padding: "50px 20px", // Exemplo com mais padding vertical
  };
  // --- FIM DA ATUALIZAÇÃO ---

  const phoneLinkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const instagramLinkStyle = {
    color: "white",
    textDecoration: "none",
    wordWrap: "break-word",
    overflowWrap: "break-word",
  };

  return (
    <div style={containerStyle}>
      {/* O div abaixo agora usará o contactStyle atualizado */}
      <div className="contact-page" style={contactStyle}>
        <h1>Contato</h1>
        <p>
          <FaWhatsapp />
          <a
            href="https://wa.me/554484385955"
            target="_blank"
            rel="noopener noreferrer"
            style={phoneLinkStyle}
          >
          +55 44 8438-5955
          </a>
        </p>
        <p>Atendimento@littacortinasepersianas.com.br</p>
        <p>
        <FaInstagram />
          <a
            href="https://www.instagram.com/littacortinasepersianas/"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramLinkStyle}
          >
            {/* É uma boa prática não repetir URLs longas como texto visível */}
            @littacortinasepersianas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;