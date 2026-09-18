import Navbar from './components/Navbar/Navbar'
import './App.css'
import Footer from './components/Footer/Footer'  
import Hero from './components/Hero/Hero'
import Professional from './components/Professional/Professional'

function App() {
  return (
    <div className="app">
      <Navbar />

      <Hero />
      
      <main>
        
        <Professional />

      </main>

      <Footer />
    </div>
  )
}

export default App
