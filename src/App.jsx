// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Body from './components/Body';
// import About from './components/About'; // Importando a nova página
// import './App.css';


// import { analytics } from './firebase-config';  

// function App() {
//   console.log("Firebase Analytics ativo:", analytics); // Apenas para garantir que está funcionando
//   return (
//     <Router>
//       <div className="App" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Body />} />
//           <Route path="/sobre" element={<About />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;



// App.jsx


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About"; 
import Services from "./components/Services";
import Contact from "./components/Contact";
import "./App.css";
import { analytics } from "./firebase-config";  

function App() {
  console.log("Firebase Analytics ativo:", analytics);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/servicos" element={<Services />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
