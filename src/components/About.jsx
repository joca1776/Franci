import React from "react";
import dotNoiseImage from "../assets/dotnoise-light-grey.png";


const About = () => {
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
        backgroundImage: `url(${dotNoiseImage})`, // Use a variável importada
    };

    const aboutStyle = {
        backgroundColor: "#d8cba3",
        color: "#ffffff",
        padding: "50px 20px",
        borderRadius: "20px",
        textAlign: "center",
        fontFamily: "'Asbigan', sans-serif",
        maxWidth: "100%",
        width: "100%",
        boxSizing: "border-box",
    };

    const headingStyle = {
      marginBottom: "40px" // Adiciona espaçamento abaixo do h1
    };

    const paragraphStyle = {
      textAlign: "justify", // justifica o texto
    };

    return (
        <div style={containerStyle}>
            <div className="about-page" style={aboutStyle}>
                <h1 style={headingStyle}>Sobre Nós</h1>
                <p style={paragraphStyle}>Olá! Me chamo Franciele, sou contadora, tenho 25 anos de idade, nasci e fui criada em Joinville. Passei seis anos em uma empresa, trabalhando como CLT, quando uma mudança desafiadora surgiu em minha vida: a mudança para Maringá. Isso representou uma virada radical, pois estava prestes a deixar minha zona de conforto para trás e começar do zero. Foi então que me dediquei à abertura da minha própria empresa e à realização do sonho de empreender.</p>
                <p style={paragraphStyle}>Minha história com cortinas não é algo novo. Quando criança, costumava passar férias e alguns dias especiais na casa dos meus avós e acompanhava minha avó Anélida, mais conhecida como Litta, na sua rotina de trabalho. Ela tinha muita experiência com cortinas. Enquanto habilmente costurava belas cortinas, eu estava lá ao lado, observando e aprendendo um pouco mais sobre esse mundo. Infelizmente, há 14 anos, minha avó teve um AVC que comprometeu seus movimentos, fazendo com que ela parasse de costurar. Com o tempo, minha irmã Francine seguiu os mesmos passos dela, abrindo uma loja de cortinas em Joinville. Foi então que decidi reviver esse mundo e abrir meu próprio negócio, homenageando minha avó Litta, que tanto me ensinou.</p>
                <p style={paragraphStyle}>Assim, minha história se tornou uma jornada de crescimento, coragem e amor. Uma jornada que começou nas mãos habilidosas de minha avó Litta e continua a prosperar como uma homenagem à mulher que tanto me influenciou. É uma história de tradição, conexão e paixão que continuará a ser contada.</p>
            </div>
        </div>
    );
};

export default About;