import './Footer.css'

const SCHEDULE = [
  { days: 'Lunes a viernes', hours: '9:00 am – 1:00 pm / 3:00 pm – 8:00 pm' },
  { days: 'Sábado',          hours: '10:00 am – 6:00 pm' },
]

export default function Footer() {

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-info">
        <div className="footer-block">
            <h3 className="footer-heading">Grupo de Gestión Zapopan</h3>
            <p className="footer-description"> Somos una asociación civil que <br />
            promueve el desarrollo de herramientas para <br />
            el manejo de las emociones mediante cursos, <br />
            atención psicológica y talleres.</p>
          </div>
          
          <div className="footer-block">
            <h3 className="footer-heading">Dirección</h3>
            <address className="footer-address">
              Jardines de las Clavelinas #1415<br />
              Col. Jardines del Vergel<br />
              Zapopan 45180
            </address>
          </div>

          <div className="footer-block">
            <h3 className="footer-heading">Horario</h3>
            <ul className="footer-schedule">
              {SCHEDULE.map(({ days, hours }) => (
                <li key={days}>
                  <span className="schedule-days">{days}:</span>
                  <span className="schedule-hours">{hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
