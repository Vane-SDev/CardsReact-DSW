import React, { useState } from "react";
import "./EstefaniaCard.css";

export default function EstefaniaCard({ name, image, description, link, additionalInfo, hobbies }) {
  const [showDetails, setShowDetails] = useState(false);
  const [hoverEffect, setHoverEffect] = useState(false);

  return (
    <div
      className={`cardE ${hoverEffect ? "hover" : ""}`}
      onMouseEnter={() => setHoverEffect(true)}
      onMouseLeave={() => setHoverEffect(false)}
    >
      <img src={image} alt={`${name}'s profile`} className="cardE-image" />
      <h2 className="cardE-name">{name}</h2>
      <p className="cardE-description">{description}</p>
      <button className="cardE-more"onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Ocultar detalles" : "Ver detalles"}
      </button>
      {showDetails && (
        <div className="cardE-details">
          <p>{additionalInfo}</p>
          <h3>Hobbies:</h3>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <p>Estilo de trabajo: Analítica, lógica y orientada a la optimización.</p>
        </div>
      )}
      <a href={link} className="cardE-link" target="_blank" rel="noopener noreferrer">
        LinkedIn
      </a>
    </div>
  );
}