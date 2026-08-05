import Navbar from './components/Navbar'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="psicologia" className="specialty-section">
          <div className="specialty-content">
            <div className="specialty-icon" aria-hidden="true">🧠</div>
            <h2>Psicología</h2>
            <p>Atención psicológica integral para el bienestar mental y emocional de la comunidad.</p>
          </div>
        </section>

        <section id="odontologia" className="specialty-section specialty-section--alt">
          <div className="specialty-content">
            <div className="specialty-icon" aria-hidden="true">🦷</div>
            <h2>Odontología</h2>
            <p>Servicios dentales de calidad para una sonrisa saludable y un cuidado preventivo efectivo.</p>
          </div>
        </section>

        <section id="fisioterapia" className="specialty-section">
          <div className="specialty-content">
            <div className="specialty-icon" aria-hidden="true">🏃</div>
            <h2>Fisioterapia</h2>
            <p>Rehabilitación física y terapia especializada para recuperar movilidad y calidad de vida.</p>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
