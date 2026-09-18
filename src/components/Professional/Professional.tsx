import './Professional.css';
import { PROFILES } from '../../data/Content';
import type { Professional } from './Professional.types';


export default function Professional() {
  return (
    <section id="profesionales" className="professional-section">
      <h2 style={{ textAlign: 'center', padding: '2rem 0' }}>Conoce a nuestros profesionales</h2>
    <div className="professional-grid">
    {PROFILES.map((profile) => (
      <div key={profile.id} className="professional-card">
            <div className="professional-header">
              <img src={profile.imageUrl} alt={`Foto de ${profile.name}`} className="professional-image" />
              <div className="professional-title-group">
                <h3>{profile.name}</h3>
                <span className="professional-approach">{profile.approach}</span>
                <span className="professional-cedula">Cédula: {profile.cedula}</span>
              </div>
            </div>

            <div className="professional-body">
              <p><strong>Formación:</strong> {profile.institution}</p>
              <p><strong>Población:</strong> {profile.population}</p>
              <p><strong>Áreas de atención:</strong> {profile.areas}</p>
              <p><strong>Experiencia:</strong> {profile.experience}</p>
              <p><strong>Modalidad:</strong> {profile.modality}</p>

              <div className="professional-message">
                <p><em>"{profile.message}"</em></p>
              </div>
            </div>
      </div>
    ))}
    </div>
    </section>
  )
}

{/*const Professional: React.FC<Professional> = ({
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

export default Professional; */}
