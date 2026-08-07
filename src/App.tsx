import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'  
import Hero from './components/Hero/Hero'
import Specialty from './components/Specialty/Specialty'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />
      
      <main>
        <Specialty/>
      </main>

      <Footer />
    </div>
  )
}

export default App
