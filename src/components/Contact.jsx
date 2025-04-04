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
    padding: "170px 20px 80px 20px",
    width: "100%",
    margin: "0",
    boxSizing: "border-box",
    gap: "20px",
    backgroundImage: `url(${dotNoiseImage})`,
  };

  const contactStyle = {
    backgroundColor: "#d8cba3",
    color: "#ffffff",
    padding: "30px 20px",
    borderRadius: "20px",
    textAlign: "center",
    fontFamily: "'Asbigan', sans-serif",
    width: "calc(100% - 40px)",
    maxWidth: "1200px",
    boxSizing: "border-box",
    marginBottom: '20px',
  };

  const phoneLinkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const instagramLinkStyle = {
    color: "white",
    textDecoration: "none",
    wordWrap: "break-word",      // Já estava aqui, ótimo!
    overflowWrap: "break-word", // Boa prática incluir o padrão atual
  };

  // --- ESTILO PARA O EMAIL (NOVO) ---
  const emailStyle = {
    overflowWrap: 'break-word', // Permite quebrar palavras longas para evitar overflow
    wordWrap: 'break-word',      // Alias para compatibilidade com navegadores mais antigos
    // Alternativa mais agressiva (quebra em qualquer caractere):
    // wordBreak: 'break-all',
  };
  // --- FIM DA ADIÇÃO ---

  return (
    <div style={containerStyle}>
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
        {/* Aplicar o novo estilo ao parágrafo do email */}
        <p style={emailStyle}>
          Atendimento@littacortinasepersianas.com.br
        </p>
        <p>
        <FaInstagram />
          <a
            href="https://www.instagram.com/littacortinasepersianas/"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramLinkStyle} // O estilo do link já ajuda, mas o problema é no <p> pai
          >
            @littacortinasepersianas
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contact;