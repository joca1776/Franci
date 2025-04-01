import React from "react";

const Footer = () => {
  const footerStyle = {
    backgroundColor: "#454431", // Cor escura da paleta
    color: "#d8cba3", // Texto em tom claro para contraste
    textAlign: "center",
    padding: "15px 0", // Espaçamento interno
    fontSize: "18px",
    fontFamily: "'Montserrat', sans-serif",
    position: "sticky", /* Fixar o footer na parte inferior */
    bottom: 0,
    width: "100%",
    height: "30px", 
    // marginTop: "auto", // Isso empurra o footer para o fundo
    display: "flex", // Adicionado flexbox
    alignItems: "center", // Centraliza verticalmente
    justifyContent: "center", // Centraliza horizontalmente
  };

  // Responsividade via media queries
  const footerResponsiveStyle = {
    ...footerStyle,
    fontSize: "16px", // Reduzir o tamanho da fonte em telas menores
    padding: "10px 0", // Ajustar o padding em telas menores
    height: "50px", // Altura fixa para dispositivos móveis
  };

  return (
    <footer style={window.innerWidth <= 768 ? footerResponsiveStyle : footerStyle}>
      <p>© 2025 Litta cortinas e persianas. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
