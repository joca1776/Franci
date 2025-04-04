// Header.jsx
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/logo.png";
import "./Header.css"; // Mantém a importação do CSS externo

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Texto para o letreiro
  const tickerText = "Nossos Modelos de Persianas: Vertical - Horizontal - Rolo - Romana - Painel | Cortinas: Prega Wave - Prega Macho - Prega Fêmea - Prega Americana - Xales";

  return (
    // Usa um Fragmento <> para retornar múltiplos elementos
    <>
      {/* Seu Header existente */}
      <header className="header gradient-background">
        <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
        </Link>

        {/* Menu desktop */}
        <ul className="nav-list">
          {/* ... links ... */}
          <li><Link to="/" className="nav-link">HOME</Link></li>
          <li><Link to="/sobre" className="nav-link">SOBRE</Link></li>
          <li><Link to="/servicos" className="nav-link">SERVIÇOS</Link></li>
          <li><Link to="/contato" className="nav-link">CONTATO</Link></li>
        </ul>

        {/* Botão de hambúrguer */}
        <div className="hamburger-menu" onClick={toggleMenu}>
           <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
           <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
           <div className={`bar ${isMenuOpen ? "open" : ""}`}></div>
        </div>

        {/* Menu lateral */}
        <div className={`side-menu ${isMenuOpen ? "open" : ""}`}>
          <button className="close-menu" onClick={toggleMenu}>X</button>
          <ul className="side-nav-list">
            {/* ... links ... */}
            <li><Link to="/" className="nav-link" onClick={toggleMenu}>HOME</Link></li>
            <li><Link to="/sobre" className="nav-link" onClick={toggleMenu}>SOBRE</Link></li>
            <li><Link to="/servicos" className="nav-link" onClick={toggleMenu}>SERVIÇOS</Link></li>
            <li><Link to="/contato" className="nav-link" onClick={toggleMenu}>CONTATO</Link></li>
          </ul>
        </div>
      </header>

      {/* --- NOVA BARRA DE LETREIRO (TICKER) --- */}
      <div className="ticker-bar">
        <div className="ticker-text">
          {/* Repete o texto para criar o loop contínuo */}
          {`${tickerText} \u00A0 | \u00A0 ${tickerText}`}
        </div>
      </div>
      {/* --- FIM DA NOVA BARRA --- */}
    </>
  );
};

export default Header;