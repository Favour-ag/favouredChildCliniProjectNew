import React from 'react'
import Home from './components/pages/Home'
import AboutPage from './components/pages/AboutPage'
import Services from './components/Services'
import ServicesPage from './components/pages/ServicesPage'
import Contact from './components/Contact'
import ContactPage from './components/pages/ContactPage'
import BookAppointment from './components/pages/BookAppointment'
import PageNotFound from './components/pages/PageNotFound'
import { Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutpage" element={<AboutPage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/servicesPage" element={<ServicesPage />} /> 
        <Route path="/contact" element={<Contact />} />               
        <Route path="/contactPage" element={<ContactPage />} /> 
        <Route path="/bookappointment" element={<BookAppointment />} /> 
        <Route path="*" element={<PageNotFound />} />        
      </Routes>
    </>
  )
}

export default App
