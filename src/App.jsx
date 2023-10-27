import React from 'react'
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import Contact from './components/pages/Contact'
import ContactPage from './components/pages/ContactPage'
import ServicesPage from './components/pages/ServicesPage'
import Services from './components/Services'
import BookAppointment from './components/pages/BookAppointment'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './components/pages/PageNotFound'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/servicesPage" element={<ServicesPage />} /> 
        <Route path="/contact" element={<Contact />} /> C              
        <Route path="/contactpage" element={<ContactPage />} /> 
        <Route path="/bookappointment" element={<BookAppointment />} /> 
        <Route path="*" element={<PageNotFound />} />        
      </Routes>
    </>
  )
}

export default App