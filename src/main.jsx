import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Navbar from './components/navbar.jsx'
import Joinus from './components/joinus.jsx'
import Earlycareer from './components/Earlycareer.jsx'
import Professionals from './components/Professionals.jsx'
import Executives from './components/Executives.jsx'
import BecomeMentor from './components/BecomeMentor.jsx'
import Footer from './components/Footer.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <BecomeMentor/>
    <Footer/>
  </React.StrictMode>,
)
