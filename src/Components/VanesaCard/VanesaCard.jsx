import './VanesaCard.css';
import React, { useEffect, useState } from 'react';

export default function VanesaCard({
  name,
  image,
  description,
  link,
  additionalInfo,
  hobbies = [], 
  skills = [],  
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`cardV ${isVisible ? 'visible' : ''}`}>
      <img src={image} alt={`${name}'s profile`} className="cardV-image" />
      <h2 className="cardV-name">{name}</h2>
      <p className="cardV-description">{description}</p>
      {showDetails && (
        <div className="cardV-details">
          <p>{additionalInfo}</p>
          <h3>Hobbies:</h3>
          <ul>
            {hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
          <h3>Habilidades:</h3>
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
      <button
        className="cardV-button"
        onClick={() => setShowDetails(!showDetails)}
      >
        {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
      </button>
      <a href={link} className="cardV-link" target="_blank" rel="noopener noreferrer">
        Ver perfil
      </a>
    </div>
  );
}