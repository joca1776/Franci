import React from "react";
import minhaImagem1 from "../assets/Cortinas_sob_medida.jpeg";
import minhaImagem2 from "../assets/Persianas_sob_medida.jpg";
import minhaImagem3 from "../assets/Reformas.jpg";
import minhaImagem4 from "../assets/Lavagem_de_cortinas.jpg";
import dotNoiseImage from "../assets/dotnoise-light-grey.png"; // Presumo que você queira usar isso

const Services = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Alterado de 'center' para alinhar ao topo
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#ffffff",
    padding: "170px 20px 80px 20px", // Ajustei o padding top para menos espaço se o header for fixo
    width: "100%",
    margin: "0",
    boxSizing: "border-box",
    gap: "40px", // Aumentei o espaçamento entre a H1 e a grade
    // backgroundImage: url(${dotNoiseImage}), // Corrigido: precisa ser uma string template literal
    backgroundImage: `url(${dotNoiseImage})`,
  };

  const servicesHeaderStyle = { // Renomeado de servicesStyle para clareza
    backgroundColor: "#d8cba3",
    color: "#ffffff",
    padding: "30px 20px", // Padding ajustado
    borderRadius: "20px",
    textAlign: "center",
    fontFamily: "'Asbigan', sans-serif", // Verifique se esta fonte está carregada
    width: "calc(100% - 40px)", // Usa a largura total menos o padding do container pai
    maxWidth: "1200px", // Limite máximo opcional
    boxSizing: "border-box",
    marginBottom: '20px', // Espaço abaixo do título
  };

  const servicesGridStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px", // Espaço entre os itens da grade
    width: "100%",
    maxWidth: "1200px", // Opcional: Limita a largura máxima da grade
  };

  const serviceItemStyle = {
    backgroundColor: "#d8cba3", // Movido o fundo para o item individual
    color: "#ffffff",         // Cor do texto no item
    padding: "20px",          // Padding interno do item
    borderRadius: "20px",     // Borda arredondada do item
    textAlign: "center",
    fontFamily: "'Asbigan', sans-serif",
    width: "calc(50% - 10px)", // Base de duas colunas (subtrai metade do gap)
    // Para telas menores, idealmente usar media query para width: 100% ou calc(100% - 20px)
    maxWidth: "400px", // Opcional: Limita a largura máxima de um item
    minWidth: "150px", // Opcional: Garante uma largura mínima
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box", // Garante que padding não aumente o tamanho total
    gap: "15px", // Espaço entre o título e a imagem dentro do item
  };

  // --- MODIFICAÇÕES DA OPÇÃO 1 ---
  const imageContainerStyle = {
    width: "90%",           // Largura relativa ao serviceItemStyle
    height: "0",            // Necessário para o truque do padding-bottom
    paddingBottom: "90%",   // Faz a altura ser igual à largura (aspecto 1:1)
    borderRadius: "50%",    // Torna o container quadrado em um círculo
    overflow: "hidden",     // Esconde as partes da imagem fora do círculo
    position: "relative",   // Necessário para posicionar a imagem filha absolutamente
    backgroundColor: "#ffffff", // Cor de fundo opcional para visualização
    marginTop: 'auto', // Puxa o container da imagem para baixo dentro do card flexível
    // Removido marginTop, agora o 'gap' no serviceItemStyle controla o espaço
  };

  const imageStyle = {
    position: "absolute",   // Posiciona a imagem dentro do container
    top: 0,
    left: 0,
    width: "100%",          // Preenche a largura do container
    height: "100%",         // Preenche a altura (dada pelo paddingBottom do pai)
    objectFit: "cover",     // Cobre o espaço, mantém proporção, corta excesso
    display: 'block',       // Remove possível espaço extra abaixo da imagem
  };
  // --- FIM DAS MODIFICAÇÕES ---

  return (
    <div style={containerStyle}>
      {/* Título Principal */}
      <div style={servicesHeaderStyle}>
        <h1>Serviços</h1>
      </div>

      {/* Grade de Serviços */}
      <div style={servicesGridStyle}>
        {/* Item 1 */}
        <div style={serviceItemStyle}> {/* Aplicado o estilo de fundo aqui */}
          <h2 style={{ fontSize: "1.5em", margin: 0 }}>Cortinas sob medida</h2> {/* Usei H2 para semântica */}
          <div style={imageContainerStyle}>
            <img src={minhaImagem1} alt="Cortinas sob medida" style={imageStyle} />
          </div>
        </div>

        {/* Item 2 */}
        <div style={serviceItemStyle}>
          <h2 style={{ fontSize: "1.5em", margin: 0 }}>Persianas sob medida</h2>
          <div style={imageContainerStyle}>
            <img src={minhaImagem2} alt="Persianas sob medida" style={imageStyle} />
          </div>
        </div>

        {/* Item 3 */}
        <div style={serviceItemStyle}>
          <h2 style={{ fontSize: "1.5em", margin: 0 }}>Reformas</h2>
          <div style={imageContainerStyle}>
            <img src={minhaImagem3} alt="Reformas de cortinas e persianas" style={imageStyle} />
          </div>
        </div>

        {/* Item 4 */}
        <div style={serviceItemStyle}>
          <h2 style={{ fontSize: "1.5em", margin: 0 }}>Lavagem de cortinas</h2>
          <div style={imageContainerStyle}>
            <img src={minhaImagem4} alt="Lavagem de cortinas" style={imageStyle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;