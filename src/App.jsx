import AppRoutes from './routes'   // custom routing terpisah
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />   {/* ini dari /routes/index.jsx */}
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
