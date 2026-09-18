import './Professional.css';
import React from 'react';
import type { ProfessionalProps } from './Professional.types';


const Professional: React.FC<ProfessionalProps> = ({
  name,
  cedula,
  institution,
  approach,
  population,
  areas,
  experience,
  modality,
  message,
  imageUrl
}) => {
  return (
    <div className="professional-card">
      <div className="professional-header">
        <img src={imageUrl} alt={`Foto de ${name}`} className="professional-image" />
        <div className="professional-title-group">
          <h3>{name}</h3>
          <span className="professional-approach">{approach}</span>
          <span className="professional-cedula">Cédula: {cedula}</span>
        </div>
      </div>
      
      <div className="professional-body">
        <p><strong>Formación:</strong> {institution}</p>
        <p><strong>Población:</strong> {population}</p>
        <p><strong>Áreas de atención:</strong> {areas}</p>
        <p><strong>Experiencia:</strong> {experience}</p>
        <p><strong>Modalidad:</strong> {modality}</p>
        
        <div className="professional-message">
          <p><em>"{message}"</em></p>
        </div>
      </div>
    </div>
  );
};

export default Professional;
