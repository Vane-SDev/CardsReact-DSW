import "@fortawesome/fontawesome-free/css/all.min.css";
import React, {useState } from "react";
import VanesaCard from "./Components/VanesaCard/VanesaCard";
import EstefaniaCard from "./Components/EstefaniaCard/EstefaniaCard";
import About from "./Components/about/about";
import perfil2 from "./assets/perfil2.jpeg";
import perfil1 from "./assets/perfil1.jpeg";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import data from "./Data/Profile.json";
import "./App.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
   

  // Encuentra los datos específicos para cada tarjeta
  const vanesaData = data.find((profile) => profile.name === "Vanesa Soria");
  const estefaniaData = data.find((profile) => profile.name === "Estefania Vago");
    
 const imageMap = {
      perfil1: perfil1,
      perfil2: perfil2,
    };

    
  return (
    <Router>
      <div className={`App ${isDarkMode ? "dark" : ""}`}>
        <button
          className="mode-toggle-button"
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
        </button>

        <nav>
          <h1>Trabajo Práctico N°2</h1>

          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/about">Sobre nosotras</Link>
            </li>
            <li>
              <Link to="/Estefanía">Estefanía</Link>
            </li>
            <li>
              <Link to="/Vanesa">Vanesa</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <div className="intro">
                <h2>Bienvenidos a Nuestro Espacio de Talento</h2>
                <p>
                  En este equipo encontrarás desarrolladoras apasionadas por la tecnología
                  y el desarrollo de software. Cada una de nosotras aporta algo único, 
                  desde la creatividad en el frontend hasta la lógica y estructura del backend.
                  ¡Haz clic en los nombres para conocer más de cada una!
                </p>
              </div>
            }
          />
          <Route path="/About" element={<About />} />
            <Route
              path="/Estefanía"
              element={
                <div className="card-container">
                  <EstefaniaCard
                    name={estefaniaData.name}
                    image={imageMap[estefaniaData.image]} 
                    description={estefaniaData.description}
                    link={estefaniaData.link}
                    additionalInfo={estefaniaData.additionalInfo}
                    hobbies={estefaniaData.hobbies}
                    skills={estefaniaData.skills}
                  />
                </div>
              }
            />
            <Route
              path="/Vanesa"
              element={
                <div className="card-container">
                  <VanesaCard
                    name={vanesaData.name}
                    image={imageMap[vanesaData.image]} 
                    description={vanesaData.description}
                    link={vanesaData.link}
                    additionalInfo={vanesaData.additionalInfo}
                    hobbies={vanesaData.hobbies}
                    skills={vanesaData.skills}
                  />
                </div>
              }
            />
        </Routes>
      </div>
    </Router>
  );
}