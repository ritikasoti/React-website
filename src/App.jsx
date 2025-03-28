import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero-section/Hero'
import Programs from './components/Programs/programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Photos from './components/Photos/Photos'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
         <Title subTitle= "OUR PROGRAMS" title="Tech-Driven Education for a Brighter Tomorrow" /> 
        {/* <Title /> */}
      <Programs />
      <About />
      <Title subTitle= "SPECIALISED PERFORMANCE" title="Bridging the Gap Between Technology and Education" /> 
      <Photos />
      <Title subTitle= "TESTIMONIALS" title="What Our Customers Says" />
      <Testimonials />
      <Title subTitle= "Contact us" title="Get In Touch" />
      <Contact />
      <Footer />
      </div>
    </div>
  )
}

export default App
