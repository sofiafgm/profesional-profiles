import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'  
import Hero from './components/Hero/Hero'
import Specialty from './components/Specialty/Specialty'


import Professional from './components/Professional/Professional'
import { PROFILES } from './data/Content'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />
      
      <main>
       
        <Specialty />

        
        <section id="profesionales" className="profiles-section">
          <h2 style={{ textAlign: 'center', padding: '2rem 0' }}>Conoce a los profesionales</h2>
          
          <div className="profiles-grid">
            {PROFILES.map((profile) => (
              <Professional 
                key={profile.id}
                name={profile.name}
                cedula={profile.cedula}
                institution={profile.institution}
                approach={profile.approach}
                population={profile.population}
                areas={profile.areas}
                experience={profile.experience}
                modality={profile.modality}
                schedule={profile.schedule}
                message={profile.message}
                imageUrl={profile.imageUrl}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
