import './specialty.css';
import type { Specialty } from './Specialty.types';
import { SPECIALTIES } from '../../data/Content';

export default function Specialty() {
    return (
      SPECIALTIES.map((specialty) => (
      <section
      key={specialty.id}
      id={specialty.href}
      className={`specialty-section ${
        specialty.id % 2 === 0 ? "specialty-section--alt" : ""
      }`}
    >
      <div className="specialty-content">
        <div className="specialty-icon" aria-hidden="true">
          {specialty.icon}
        </div>
  
        <h2>{specialty.name}</h2>
  
        <p>{specialty.description}</p>
      </div>
    </section>
    ))
  )
}